import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: rgba(230, 206, 255);
  padding: 4px 0px 60px;
  height: fit-content;
  position: absolute;
  margin-top: 40px;
  bottom: 0;
  @media only screen and (max-height: 1100px) {
    position: relative;
  }
  @media only screen and (max-width: 1100px) {
    padding: 4px 0px 40px;
  }
  @media only screen and (max-width: 800px) {
    padding: 4px 0px 28px;
  }
  @media only screen and (max-width: 600px) {
    padding: 4px 0px 20px;
  }
`;
