import { Card } from 'react-bootstrap';
import styled from 'styled-components/macro';

const StyledCard = styled(Card)`
  border-color: ${props => props.theme.cards.borderColor};
  background-color: ${props => props.theme.cards.backgroundColor};
`;

const RowCard = styled(StyledCard)`
  flex-direction: row !important;

  .card-img-left {
    border-top-left-radius: calc(0.25rem - 1px);
    border-bottom-left-radius: calc(0.25rem - 1px);
  }
`;

const RowCardImg = styled(Card.Img)`
  max-width: ${props => (props.maxwidth ? props.maxwidth + '!important' : '')};
`;

export { RowCard, RowCardImg, StyledCard };
