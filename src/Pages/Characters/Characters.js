import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import PeopleCard from '../../components/PeopleCard';
import Logout from '../Logout/Logout';

const People = gql`
  query AllPeopleQuery($first: Int!, $after: String) {
    allPeople(first: $first, after: $after) {
      edges {
        node {
          id
          name
          image
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

function Characters() {
  const { data, loading, error, fetchMore } = useQuery(People, {
    variables: { first: 12 },
  });
  if (loading) return <p>loading</p>;

  if (error) {
    return <Logout />;
  }

  const {
    allPeople: { edges: peoples, pageInfo },
  } = data;

  const loadMorePeoples = () => {
    fetchMore({
      variables: {
        first: 12,
        after: pageInfo['endCursor'],
      },
      updateQuery: (prev, { fetchMoreResult: { allPeople } }) => {
        if (!allPeople.edges.length) {
          return prev;
        }
        return {
          allPeople: {
            ...prev.allPeople,
            edges: [...prev.allPeople.edges, ...allPeople.edges],
            pageInfo: allPeople.pageInfo,
          },
        };
      },
    });
  };

  return (
    <React.Fragment>
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
      <Col className="text-center">
        {pageInfo.hasNextPage && (
          <Button onClick={loadMorePeoples}>Load More</Button>
        )}
      </Col>
    </React.Fragment>
  );
}

export default Characters;
