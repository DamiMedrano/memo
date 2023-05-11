import styled, { keyframes } from 'styled-components';
import { AiOutlineLoading } from 'react-icons/ai';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AiOutlineLoadingStyled = styled(AiOutlineLoading)`
  animation: ${spin} 1s infinite linear;
  font-size: 40px;

  width: 50px;
`;

export const Container = styled.div`
  width: 100%;
  text-align: center;
  background-color: rgba(230, 206, 255);
  padding: 4px 0px 60px;
  height: fit-content;
  position: absolute;
  margin-top: 40px;
  bottom: 0;
  @media only screen and (max-height: 1100px) {
    position: relative;
    padding: 4px 0px 40px;
  }
  @media only screen and (max-width: 800px) {
    padding: 4px 0px 28px;
  }
  @media only screen and (max-width: 600px) {
    padding: 4px 0px 20px;
  }
`;
