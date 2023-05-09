import styled from 'styled-components';

export const Header = styled.h3`
  margin-left: 16px;
  font-size: 25px;
  margin-bottom: 30px;
`;

export const Text = styled.p`
  margin-left: 20px;
  padding: 4px;
  font-size: 18px;
`;

export const Input = styled.input`
  border: 1px solid rgba(220, 220, 220);
  transition: 0.2s border;
  border-radius: 4px;
  width: 84%;
  margin-left: 20px;
  font-size: 16px;
  display: block;
  margin-bottom: 20px;
  padding: 8px;
  &:hover {
    border: 1px solid rgba(220, 220, 220, 0.6);
  }
  &:focus {
    outline: 4px solid #ba68c8;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 50px 25px;
  z-index: 1000;
  border-radius: 2;
  transition: 0.5s all;
  width: 30%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;
