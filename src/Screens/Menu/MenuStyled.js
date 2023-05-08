import styled, { keyframes } from 'styled-components';

const slideInLeft = keyframes`
  from {
    left: 0;
    opacity: 0;
  }
  to {
    left: unset;
    opacity: 1;
  }
`;

const slideInRight = keyframes`
  from {
    right: 0;
    opacity: 0;
  }
  to {
    right:40%;
    opacity: 1;
  }
`;

export const Container = styled.div`
  text-align: center;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.div`
  font-family: cursive;
  position: relative;
  width: 100%;
  height: 180px;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
`;

export const PartOne = styled.h1`
  font-size: 60px;
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  animation: ${slideInLeft} 1.5s ease-out forwards;
`;

export const PartTwo = styled.h1`
  font-size: 60px;
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 0;
  animation: ${slideInRight} 1.5s ease-out both;
`;
