import React from 'react';
import {Container, ImageBox, HeartButton, IconHeartFull} from './styles';

const DetailProduct = () => {
  return (
    <Container>
      <ImageBox>
        <HeartButton>
          <IconHeartFull name="heart" />
        </HeartButton>
      </ImageBox>
    </Container>
  );
};

export default DetailProduct;
