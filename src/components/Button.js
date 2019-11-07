import React from 'react';
import styled from 'styled-components/macro';

function SwButton(props) {
  const SolidButton = styled.button`
    font-size: 24px;
    background-color: ${props => props.theme.buttons.solid.backgroundColor};
    border-color: ${props => props.theme.buttons.solid.borderColor};
    color: ${props => props.theme.buttons.solid.color};
  `;

  const OutlineButton = styled.button`
    font-size: 27px;
    background-color: ${props => props.theme.buttons.outline.backgroundColor};
    border-color: ${props => props.theme.buttons.outline.borderColor};
    color: ${props => props.theme.buttons.outline.color};
  `;

  if (props.variant === 'outline') {
    return OutlineButton;
  }
  return <SolidButton {...props}></SolidButton>;
}

export default SwButton;
