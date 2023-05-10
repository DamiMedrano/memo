import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from './ButtonStyled';

const PrimaryButton = ({ children, screen, text }) => {
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

export default PrimaryButton;

const ButtonLink = styled(Link)`
  background-color: #e865ff;
  &:hover {
    background-color: #eb76ff;
  }
`;

const Button = styled.button`
  background-color: #e865ff;
  &:hover {
    background-color: #eb76ff;
  }
`;
