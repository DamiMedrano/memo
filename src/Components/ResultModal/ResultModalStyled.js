import styled from 'styled-components';

export const Header = styled.h3`
  font-size: 25px;
  margin-bottom: 0;
  margin-top: 0;
  @media only screen and (max-width: 700px) {
    font-size: 18px;
  }
`;

export const LeadershipSection = styled.div`
  padding: 10px 20px;
`;

export const LeadershipHeader = styled.h4`
  font-size: 22px;
  display: block;
  padding: 10px;
  margin: 0;
  margin-bottom: 20px;
  padding-left: 0;
  border-bottom: 4px dashed #ba68c8;
  @media only screen and (max-width: 700px) {
    font-size: 16px;
  }
`;

export const Profile = styled.div`
  padding: 10px;
  border-bottom: 1px solid rgba(220, 220, 220, 0.5);
  opacity: ${(props) => (props.e ? '1' : '0.8')};
  font-weight: ${(props) => (props.e ? '700' : '')};
`;

export const Score = styled.span`
  float: right;
`;

export const Button = styled.button`
  text-align: center;
  float: right;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 18px;
  background-color: #ba68c8;
  color: white;
  border: none;
  border-radius: 4px;
  margin-right: 25px;
  transition: 0.2s all;
  @media only screen and (max-width: 700px) {
    font-size: 16px;
    padding: 8px 16px;
  }
`;
export const Modal = styled.div`
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 50px 30px;
  z-index: 1000;
  border-radius: 2;
  width: 40%;
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
