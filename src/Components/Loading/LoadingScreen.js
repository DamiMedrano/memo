import React from 'react';
import { Container, AiOutlineLoadingStyled } from './LoadingScreenStyled';

const LoadingScreen = () => {
  return (
    <Container>
      <h1 style={{ color: '#202020', textAlign: 'center' }}>loading</h1>
      <AiOutlineLoadingStyled icon='fa-solid fa-spinner' />
    </Container>
  );
};

export default LoadingScreen;
