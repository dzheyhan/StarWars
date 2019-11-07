import { RowCard, RowCardImg } from './Card';
import { Card } from 'react-bootstrap';
import React from 'react';
import { StyledTitle } from './styled';

function PeopleCard(props) {
  return (
    <RowCard>
      <RowCardImg variant="left" src={props.img} maxwidth="100px" />
      <Card.Body>
        <StyledTitle>
          <h6>{props.name}</h6>
        </StyledTitle>
      </Card.Body>
    </RowCard>
  );
}

export default PeopleCard;
