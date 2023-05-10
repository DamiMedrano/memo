import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #e6ceff;
  padding: 4px 0px 60px;
  margin: 40px 0;
  @media only screen and (max-width: 600px) {
    margin: 40px 0 0;
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
    margin-top: 16px;
  }
`;

export const Text = styled.a`
  width: fit-content;
  font-size: 1.4rem;
  margin-top: 16px;
  color: rgba(0, 0, 0, 0.4);
  text-decoration: none;
  transition: all 0.2s ease 0s;
  padding: 4px;
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
    padding: 4px;
    margin: 10px;
    color: rgba(0, 0, 0, 0.8);
    box-shadow: rgba(255, 255, 255, 0.82) 0px 4px 4px 0px,
      rgba(255, 255, 255, 1) 0px 4px 16px 0px;
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
        margin: 4px;
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
