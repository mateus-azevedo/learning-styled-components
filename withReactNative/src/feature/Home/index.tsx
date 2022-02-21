import React from 'react';
import {Container} from './styles';

import {Banner, Header, Item} from './components';

const Home = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <Item />
    </Container>
  );
};

export default Home;
