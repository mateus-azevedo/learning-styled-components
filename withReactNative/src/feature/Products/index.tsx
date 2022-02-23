import React from 'react';
import {ScrollView} from 'react-native';

import {ListItem} from '@components';
import {SearchBar} from './components';
import {Container, Header, Title, SubTitle, Wrapper} from './styles';
import IconFeather from 'react-native-vector-icons/Feather';

const Products = () => {
  return (
    <Container>
      <SearchBar />

      <Header>
        <Wrapper>
          <Title>Newest Products</Title>
          <SubTitle>Showing 564 Results</SubTitle>
        </Wrapper>
        <IconFeather name="list" size={24} />
      </Header>

      <ScrollView>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ScrollView>
    </Container>
  );
};

export default Products;
