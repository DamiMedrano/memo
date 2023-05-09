import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SecondaryButton = ({ children, screen, text }) => {
  const ButtonElement = screen ? (
    <ButtonLink to={screen}>
      <Button>{text}</Button>
    </ButtonLink>
  ) : (
    <Button>{children}</Button>
  );

  return ButtonElement;
};

export default SecondaryButton;

const ButtonLink = styled(Link)`
  text-decoration: none;
  padding: 10px 20px;
  width: 100%;
  display: block;
  border-radius: 4px;
  margin: -10px -20px;
`;

const Button = styled.button`
  text-align: center;
  min-width: 180px;
  margin: 20px 12px 0;
  padding: 10px 20px;
  font-size: 18px;
  background-color: #0077ff;
  color: white;
  border: none;
  border-radius: 4px;
  transition: 0.2s all;
  &:hover {
    background-color: #1c86ff;
    cursor: pointer;
  }
`;
