import React from 'react';
import {
  Container,
  ImageBox,
  HeartButton,
  IconHeartFull,
  ProductTitle,
  DescriptionTitle,
  Description,
  PurchaseContainer,
  PricePurchase,
  ButtonContainer,
  ButtonText,
  SectionContent,
} from './styles';

const DetailProduct = () => {
  return (
    <Container>
      <SectionContent>
        <ImageBox>
          <HeartButton>
            <IconHeartFull name="heart" />
          </HeartButton>
        </ImageBox>

        <ProductTitle>Minavi Headseat Pro Gaming</ProductTitle>
        <DescriptionTitle>Descriptions</DescriptionTitle>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla
          purus cursus condimentum rutrum fames.
        </Description>
      </SectionContent>

      <PurchaseContainer>
        <PricePurchase>$30.99</PricePurchase>

        <ButtonContainer>
          <ButtonText>Buy Now</ButtonText>
        </ButtonContainer>
      </PurchaseContainer>
    </Container>
  );
};

export default DetailProduct;
