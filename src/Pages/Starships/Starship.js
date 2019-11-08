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
          <h3 className="swTextTwo">{starship.name}</h3>
          <h5 className="swTextTree">{starship.model}</h5>
        </Col>
        <Col md={{ span: 3, offset: 2 }}>
          <CardWrap>
            <RowCard>
              <Card.Body>
                <h6 className="swTextTwo">Class: {starship.starshipClass}</h6>
                <Card.Img varinat="top" src={starship.image} />
                <span>
                  <span className="swTextTree">Cost:</span>
                  <span className="swTextTwo">{starship.cost} credits </span>
                </span>
                <br />
                <span>
                  <span className="swTextTree">Crew:</span>
                  <span className="swTextTwo">{starship.crew}</span>
                </span>
                <br />
                <span>
                  <span className="swTextTree">Max Atmospheric Speed:</span>
                  <span className="swTextTwo">
                    {starship.maxAtmosphericSpeed}
                  </span>
                </span>
                <br />
                <span>
                  <span className="swTextTree">Hyperdriver Rating:</span>
                  <span className="swTextTwo">{starship.hyperdriveRating}</span>
                </span>
              </Card.Body>
            </RowCard>
          </CardWrap>
        </Col>
        <Col md={{ span: 6 }}>
          <h4 className="swTextTree">Compared to Starship Class Max</h4>
          <hr />
          <h1>Todo</h1>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Starship;
