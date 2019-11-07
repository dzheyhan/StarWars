import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components/macro';
import { gql } from 'apollo-boost';
import { Col, Row, Card } from 'react-bootstrap';
import { RowCard } from '../../components/Card';
import Logout from '../Logout/Logout';

const STARSHIP = gql`
  query StarshipQuery($id: ID!) {
    starship(id: $id) {
      id
      name
      model
      image
      starshipClass
      cost
      maxAtmosphericSpeed
      maxMLPerHour
      hyperdriveRating
      crew
    }
  }
`;

function Starship() {
  let { id } = useParams();

  const { data, loading, error } = useQuery(STARSHIP, {
    variables: { id: id },
  });
  if (loading) return <p>loading</p>;

  if (error) {
    return <Logout />;
  }

  const { starship } = data;

  const CardWrap = styled.div`
    max-width: 250px;
  `;

  return (
    <React.Fragment>
      <Row>
        <Col md={{ span: 12 }} className="text-center bt-5 mb-5">
          <h3>{starship.name}</h3>
          <h5>{starship.model}</h5>
        </Col>
        <Col md={{ span: 3, offset: 2 }}>
          <CardWrap>
            <RowCard>
              <Card.Body>
                <h6>Class: {starship.starshipClass}</h6>
                <Card.Img varinat="top" src={starship.image} />
                <span>Cost: {starship.cost} credits </span>
                <br />
                <span>Crew: {starship.crew}</span>
                <br />
                <span>
                  Max Atmospheric Speed: {starship.maxAtmosphericSpeed}{' '}
                </span>
                <br />
                <span>Hyperdriver Rating: {starship.hyperdriveRating}</span>
              </Card.Body>
            </RowCard>
          </CardWrap>
        </Col>
        <Col md={{ span: 6 }}>
          <h4>Compared to Starship Class Max</h4>
          <hr />
          <h1>Todo</h1>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Starship;
