import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from './ButtonStyled';

const SecondaryButton = ({ children, screen, text }) => {
  const ButtonElement = (
    <Container>
      {screen ? (
        <ButtonLink to={screen}>{text}</ButtonLink>
      ) : (
        <Button>{children}</Button>
      )}
    </Container>
  );

  return ButtonElement;
};

export default SecondaryButton;

const ButtonLink = styled(Link)`
  background-color: #0077ff;

  &:hover {
    background-color: #1c86ff;
  }
`;

const Button = styled.button`
  background-color: #0077ff;
  &:hover {
    background-color: #1c86ff;
  }
`;
