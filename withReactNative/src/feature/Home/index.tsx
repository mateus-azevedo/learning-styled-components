import React from 'react';
import {Container} from './styles';

import {ListItem} from '@components';
import {Banner, Header} from './components';

const Home = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <ListItem />
    </Container>
  );
};

export default Home;
