import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PrimaryButton = ({ children, screen, text }) => {
  const ButtonElement = screen ? (
    <Button>
      <ButtonLink to={screen}>{text}</ButtonLink>
    </Button>
  ) : (
    <Button>{children}</Button>
  );

  return ButtonElement;
};

export default PrimaryButton;

const ButtonLink = styled(Link)`
  text-decoration: none;
  color: #fff;
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
  background-color: #e865ff;
  color: white;
  border: none;
  border-radius: 4px;
  transition: 0.2s all;
  &:hover {
    background-color: #eb76ff;
    cursor: pointer;
  }
`;
