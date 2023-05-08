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

  margin-top: 20px;
  margin-left: 20px;
  padding: 10px 20px;
  font-size: 18px;
  background-color: #ba68c8;
  color: white;
  border: none;
  border-radius: 5px;
  margin-right: 25px;
  transition: 0.2s all;
  &:hover {
    cursor: pointer;
  }
`;
