import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  * {
    text-align: center;
    min-width: 180px;
    margin: 20px 12px 0;
    font-size: 18px;
    color: #fff;
    border-radius: 4px;
    transition: 0.2s all;
  }
  button {
    padding: 10px 20px;
    border: none;
    &:hover {
      cursor: pointer;
    }
  }
  a {
    text-decoration: none;
    padding: 9px 0px;
  }
`;
