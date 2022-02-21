import React from 'react';
import {
  Container,
  Content,
  AnnouceContainer,
  AnnounceTitle,
  AnnouceSubTitle,
  BuyButtonContainer,
  BuyButtonContent,
  BuyButtonText,
} from './styles';

const Banner = () => {
  return (
    <Container>
      <Content>
        <AnnouceContainer>
          <AnnounceTitle>Black Friday</AnnounceTitle>
          <AnnouceSubTitle>20% off for all item</AnnouceSubTitle>
        </AnnouceContainer>

        <BuyButtonContainer>
          <BuyButtonContent>
            <BuyButtonText>Buy Now</BuyButtonText>
          </BuyButtonContent>
        </BuyButtonContainer>
      </Content>
    </Container>
  );
};

export default Banner;
