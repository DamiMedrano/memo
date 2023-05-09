import React from 'react';
import styled from 'styled-components';

const PrimaryButton = ({ children }) => {
  return <Button>{children}</Button>;
};

export default PrimaryButton;

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
