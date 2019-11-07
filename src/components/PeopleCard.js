import { RowCard, RowCardImg } from './Card';
import { Card } from 'react-bootstrap';
import React from 'react';

function PeopleCard(props) {
  return (
    <RowCard>
      <RowCardImg variant="left" src={props.img} maxwidth="100px" />
      <Card.Body>
        <h6>{props.name}</h6>
      </Card.Body>
    </RowCard>
  );
}

export default PeopleCard;
