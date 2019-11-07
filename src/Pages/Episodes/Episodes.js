import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Col, Row, Card } from 'react-bootstrap';
import Logout from '../Logout/Logout';
import styles from './Episodes.module.scss';
import { StyledCard } from '../../components/Card';
import { StyledTitle } from '../../components/styled';

const EPISODES = gql`
  query {
    allEpisodes(first: 100) {
      edges {
        node {
          id
          title
          episodeId
          openingCrawl
          image
          director
          releaseDate
        }
      }
    }
  }
`;

function Episodes() {
  const { data, loading, error } = useQuery(EPISODES);
  if (loading) return <p>loading</p>;

  if (error) {
    return <Logout />;
  }

  const allEpisodes = data['allEpisodes']['edges'];

  return (
    <React.Fragment>
      <Row>
        {allEpisodes.map(episode => (
          <Col md={{ span: 4 }} sm={{ span: 6 }} key={episode['node']['id']}>
            <EpisodeCard
              id={episode['node']['id']}
              img={episode['node']['image']}
              title={episode['node']['title']}
              content={episode['node']['openingCrawl']}
            />
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
}

function EpisodeCard(props) {
  return (
    <Link
      to={{
        pathname: /episodes/ + props.id,
      }}
    >
      <StyledCard className={styles.episodeCardWrap}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title className="colorLightBlue">
            <StyledTitle>{props.title}</StyledTitle>
          </Card.Title>
          <Card.Text>
            <span className={styles.episodeCardContent}>{props.content}</span>
          </Card.Text>
        </Card.Body>
      </StyledCard>
    </Link>
  );
}

export default Episodes;
