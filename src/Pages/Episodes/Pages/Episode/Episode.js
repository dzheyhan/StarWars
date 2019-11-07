import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { romanize } from '../../../../utils/number';
import { RowCard, RowCardImg } from '../../../../components/Card';
import PeopleCard from '../../../../components/PeopleCard';
import Logout from '../../../Logout/Logout';
import SwButton from '../../../../components/Button';

const EPISODE = gql`
  query EpisodeQuery($episodeId: ID!, $first: Int, $after: String) {
    episode(id: $episodeId) {
      id
      title
      episodeId
      openingCrawl
      image
      director
      releaseDate
      people(first: $first, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            id
            name
            image
          }
        }
      }
    }
  }
`;

function Episode() {
  let { id } = useParams();

  const { data, loading, error, fetchMore } = useQuery(EPISODE, {
    variables: {
      episodeId: id,
      first: 5,
    },
  });
  if (loading) return <p>loading</p>;

  if (error) {
    return <Logout />;
  }

  const { episode } = data;
  const peoples = episode['people']['edges'];
  const pageInfo = episode['people']['pageInfo'];

  const loadMorePeoples = () => {
    fetchMore({
      variables: {
        first: 5,
        after: pageInfo['endCursor'],
      },
      updateQuery: (prev, { fetchMoreResult: { episode } }) => {
        if (!episode.people.edges.length) {
          return prev;
        }
        return {
          episode: {
            ...prev.episode,
            people: {
              ...episode.people,
              edges: [...prev.episode.people.edges, ...episode.people.edges],
            },
          },
        };
      },
    });
  };

  return (
    <React.Fragment>
      <Row className="mt-5">
        <Col md={{ span: 12 }} className="m-auto mt-0">
          <TargetEpisodeCard
            img={episode['image']}
            title={episodeTitle(episode.episodeId)}
            subTitle={episode['title']}
          />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <EpisodeDescriptionCard
            content={episode['openingCrawl']}
            director={episode['director']}
            releaseDate={episode['releaseDate']}
          />
        </Col>
      </Row>
      <Row className="mt-5">
        {peoples.map(people => (
          <Col
            md={{ span: 4 }}
            sm={{ span: 6 }}
            className="mb-3"
            key={people['node']['id']}
          >
            <Link
              to={{
                pathname: /characters/ + people.node.id,
              }}
            >
              <PeopleCard
                img={people['node']['image']}
                name={people['node']['name']}
              />
            </Link>
          </Col>
        ))}
      </Row>
      <Row>
        <Col className="text-center">
          {pageInfo.hasNextPage && (
            <SwButton onClick={loadMorePeoples}>Load More</SwButton>
          )}
        </Col>
      </Row>
    </React.Fragment>
  );
}

function EpisodeDescriptionCard(props) {
  return (
    <RowCard>
      <Card.Body>
        <Card.Text />
        {props.content}
        <Card.Text />
        <p className="mb-0">
          <span>Director: </span>
          <span>{props.director}</span>
        </p>
        <p>
          <span>Release date: </span>
          <span>{props.releaseDate}</span>
        </p>
      </Card.Body>
    </RowCard>
  );
}

function TargetEpisodeCard(props) {
  return (
    <RowCard>
      <RowCardImg variant="left" src={props.img} maxwidth="180px" />
      <Card.Body>
        <h2>{props.title}</h2>
        <h3>{props.subTitle}</h3>
      </Card.Body>
    </RowCard>
  );
}

const episodeTitle = num => `Star Wars Episode ${romanize(num)}`.toLowerCase();

export default Episode;
