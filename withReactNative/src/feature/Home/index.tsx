import React from 'react';
import {Container} from './styles';

import {Banner, Header} from './components';

const Home = () => {
  return (
    <Container>
      <Header />
      <Banner />
    </Container>
  );
};

export default Home;
