import React from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Col, Row, Image } from 'react-bootstrap';

const EPISODE = gql`
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
  const { data, loading, error } = useQuery(EPISODE);
  if (loading) return <p>loading</p>;

  if (error) {
    localStorage.setItem('token', null);
    return <Redirect to="/login" />;
  }

  const t = {
    '-webkit-box-orient': 'vertical',
    display: '-webkit-box',
    'max-width': '100%',
    'overflow-x': 'hidden',
    'overflow-y': 'hidden',
    'text-overflow': 'ellipsis',
    '-webkit-line-clamp': '7',
  };

  const allEpisodes = data['allEpisodes']['edges'];

  const listEpisodes = allEpisodes.map(episode => (
    <Col md={{ span: 4 }}>
      <div
        className="wrap"
        style={{ 'max-width': '200px', 'margin-bottom': '30px' }}
      >
        <div className="img">
          <Image
            style={{ width: '100%' }}
            src={episode['node']['image']}
            rounded
          />
        </div>
        <h5>{episode['node']['title']}</h5>
        <div>
          <span style={t}>{episode['node']['openingCrawl']}</span>
        </div>
      </div>
    </Col>
  ));

  return (
    <React.Fragment>
      <Row className="mt-5">{listEpisodes}</Row>
    </React.Fragment>
  );
}

export default Episodes;
