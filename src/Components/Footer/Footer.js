import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillCode } from 'react-icons/ai';
import { Container, FooterContainer, Link, Text } from './FooterStyled';
const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        <Link href='https://github.com/DamiMedrano/' target='_blank'>
          <AiFillGithub className='github' />
        </Link>
        <Link
          href='https://www.linkedin.com/in/damian-medrano/'
          target='_blank'
        >
          <AiFillLinkedin className='linkedIn' />
        </Link>
        <Link href='https://github.com/DamiMedrano/memo' target='_blank'>
          <AiFillCode className='code' />
        </Link>
        <Text href='mailto:damian.e.medrano@gmail.com'>
          by <br /> <span style={{ fontSize: '2rem' }}>Damian Medrano</span>
        </Text>
      </FooterContainer>
    </Container>
  );
};

export default Footer;
