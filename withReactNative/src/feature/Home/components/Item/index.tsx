import React from 'react';
import {
  Container,
  ProductImage,
  DescriptionContent,
  ProductName,
  ProductPrice,
  Content,
  IconHeartEmpty,
  IconHeartFull,
} from './styles';

const Item = () => {
  return (
    <Container>
      <Content>
        <ProductImage />

        <DescriptionContent>
          <ProductName>Minavi Headseat Pro Gaming</ProductName>
          <ProductPrice>$30.99</ProductPrice>
          <IconHeartEmpty name="hearto" />
          {/* <IconHeartFull name="heart" /> */}
        </DescriptionContent>
      </Content>
    </Container>
  );
};

export default Item;
