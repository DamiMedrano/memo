import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SecondaryLinkButton = ({ screen, text }) => {
  return (
    <ButtonLink to={screen}>
      <Button>{text}</Button>
    </ButtonLink>
  );
};

export default SecondaryLinkButton;

const ButtonLink = styled(Link)`
  text-decoration: none;
  width: fit-content;
`;

const Button = styled.button`
  background-color: #0077ff;
  min-width: 180px;
  text-align: center;
  margin: 20px 12px 0;
  padding: 10px 20px;
  font-size: 18px;
  color: white;
  border: none;
  border-radius: 4px;
  transition: 0.2s all;
  &:hover {
    background-color: #1c86ff;
    cursor: pointer;
  }
`;
