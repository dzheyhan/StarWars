import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Link, useParams } from 'react-router-dom';
import { RowCard, RowCardImg } from '../../../../components/Card';
import Logout from '../../../Logout/Logout';
import styles from './Character.module.scss';

const Person = gql`
  query PersonQuery($id: ID!, $first: Int!) {
    person(id: $id) {
      id
      name
      birthYear
      height
      mass
      image
      homeworld {
        name
      }
      species {
        name
      }
      starships(first: $first) {
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

function Character() {
  let { id } = useParams();
  const { data, loading, error } = useQuery(Person, {
    variables: {
      first: 10,
      id: id,
    },
  });
  if (loading) return <p>loading</p>;

  if (error) {
    return <Logout />;
  }

  const { person } = data;

  return (
    <React.Fragment>
      <Row>
        <Col md={{ span: 12 }} className="text-center bt-5 mb-5">
          <h3>{person.name}</h3>
        </Col>
        <Col md={{ span: 3, offset: 2 }} className="mb-5">
          <div className={styles.characterCartWrap}>
            <RowCard>
              <Card.Body>
                <h6>{person.name}</h6>
                <Card.Img varinat="top" src={person.image} />
                <span>height: {person.height}</span>
                <br />
                <span>Weight: {person.mass}</span>
                <br />
                <span>Species: {person.species.name} </span>
                <br />
                <span>Home world: {person.homeworld.name}</span>
              </Card.Body>
            </RowCard>
          </div>
        </Col>
        <Col md={{ span: 6 }}>
          <h4>Pilloted Starships</h4>
          <hr />
          {person['starships']['edges'].map(starship => (
            <Link
              to={{
                pathname: /starships/ + starship['node']['id'],
              }}
              key={starship['node']['id']}
            >
              <RowCard className="mb-3">
                <RowCardImg
                  variant="left"
                  src={starship['node'].image}
                  maxwidth="60px"
                />
                <Card.Body>
                  <h6>{starship['node'].name}</h6>
                </Card.Body>
              </RowCard>
            </Link>
          ))}
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Character;
