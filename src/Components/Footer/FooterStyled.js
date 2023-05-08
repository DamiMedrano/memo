import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: rgba(230, 206, 255);
  padding: 5px 0px 50px;
  height: fit-content;
  position: absolute;
  bottom: 0;
  @media only screen and (max-height: 1100px) {
    position: relative;
  }
  @media only screen and (max-width: 1100px) {
    padding: 5px 0px 40px;
  }
  @media only screen and (max-width: 800px) {
    padding: 5px 0px 30px;
  }
  @media only screen and (max-width: 600px) {
    padding: 5px 0px 20px;
  }
`;

export const FooterContainer = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  text-align: center;
  @media only screen and (max-width: 1400px) {
    width: 60%;
  }
  @media only screen and (max-width: 1100px) {
    width: 70%;
    margin-top: 30px;
  }
  @media only screen and (max-width: 800px) {
    width: 80%;
    margin-top: 20px;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
    margin-top: 15px;
  }
`;

export const Text = styled.a`
  display: block;
  font-size: 1.4rem;
  margin-top: 15px;
  color: rgba(0, 0, 0, 0.4);
  text-decoration: none;
  transition: 0.2s all;
  padding: 5px;
  &:hover {
    color: rgba(0, 0, 0, 0.8);
  }

  @media only screen and (max-width: 800px) {
    margin-top: 10px;
    font-size: 1.3rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: black;
  &:hover {
    color: purple;
  }
  svg {
    font-size: 40px;
    background-color: white;
    border-radius: 50%;
    padding: 5px;
    margin: 10px;
    color: rgba(0, 0, 0, 0.8);
    box-shadow: rgba(255, 255, 255, 0.82) 0px 2px 4px 0px,
      rgba(255, 255, 255, 1) 0px 2px 16px 0px;
    transition: 0.2s color, 1s box-shadow;

    &.github:hover {
      color: #171515;
    }
    &.linkedIn:hover {
      color: #0e76a8;
    }
    &.code:hover {
      color: #171515;
    }

    @media only screen and (max-width: 1200px) {
      .icon {
        margin: 5px;
      }
    }
    @media only screen and (max-width: 900px) {
      .icon {
        font-size: 35px;
        margin: 4px;
      }
    }
    @media only screen and (max-width: 600px) {
      .icon {
        font-size: 32px;
        margin: 3px;
      }
    }
  }
`;
