import React from 'react';
import {useNavigation} from '@react-navigation/native';
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
  const navigation = useNavigation();

  return (
    <Container>
      <Content>
        <AnnouceContainer>
          <AnnounceTitle>Black Friday</AnnounceTitle>
          <AnnouceSubTitle>20% off for all item</AnnouceSubTitle>
        </AnnouceContainer>

        <BuyButtonContainer onPress={() => navigation.navigate('Products')}>
          <BuyButtonContent>
            <BuyButtonText>Buy Now</BuyButtonText>
          </BuyButtonContent>
        </BuyButtonContainer>
      </Content>
    </Container>
  );
};

export default Banner;
