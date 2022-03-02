import React from 'react';
import {Container, ScrollItems} from './styles';

import {ListItem} from '@components';
import {Banner, Header} from './components';

const Home = () => {
  return (
    <Container>
      <Header />
      <Banner />

      <ScrollItems>
        <ListItem />
        <ListItem />
        <ListItem />
      </ScrollItems>
    </Container>
  );
};

export default Home;
