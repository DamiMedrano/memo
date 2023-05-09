import styled, { keyframes } from 'styled-components';

const slideInLeft = keyframes`
  0% {
    transform: translateX(-400px) translateY(90px);
    opacity: 0;
  }

  100% {
    transform: translateX(0) translateY(0);
    opacity: 1;
  }
`;

const slideInRight = keyframes`
  from {
    transform: translateX(400px) translateY(-90px);
  }

  to {
    transform: translateX(0) translateY(0);
  }
`;

export const Container = styled.div`
  text-align: center;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.div`
  font-family: cursive;
  position: relative;
  width: 100%;
  margin-bottom: 2%;
  height: 180px;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
`;

export const PartOne = styled.h1`
  font-size: 60px;
  transform: translateX(-800px) translateY(90px);
  margin: 0;
  animation: ${slideInLeft} 0.5s ease-out forwards;
`;

export const PartTwo = styled.h1`
  font-size: 60px;
  transform: translateX(800px) translateY(-90px);
  margin: 0;
  animation: ${slideInRight} 0.5s ease-out both;
`;
