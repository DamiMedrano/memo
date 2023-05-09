import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PrimaryButton = ({ screen, text }) => {
  return (
    <ButtonLink to={screen}>
      <Button>{text}</Button>
    </ButtonLink>
  );
};

export default PrimaryButton;

const ButtonLink = styled(Link)`
  text-decoration: none;
  width: fit-content;
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
