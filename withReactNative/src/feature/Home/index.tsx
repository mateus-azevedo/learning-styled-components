import React from 'react';
import {Container, Title} from './styles';

import {Header} from './components';

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Title>Home Screen</Title>
      </Container>
    </>
  );
};

export default Home;
