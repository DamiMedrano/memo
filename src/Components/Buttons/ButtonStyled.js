import styled from 'styled-components';

export const Container = styled.div`
  * {
    text-align: center;
    min-width: 180px;
    margin: 20px 12px 0;
    font-size: 18px;
    color: #fff;
    border-radius: 4px;
    transition: 0.2s all
    &:hover {
      cursor: pointer;
    }
  }
  button {
    padding: 10px 20px;
    border: none;
  }
  a {
    text-decoration: none;
    padding: 9px 0px;
    display: block;
  }
`;

// width: 100%;
//   display: block;
