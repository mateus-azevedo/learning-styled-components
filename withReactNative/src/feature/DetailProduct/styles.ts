import styled from 'styled-components/native';
import IconHeart from 'react-native-vector-icons/AntDesign';

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  padding-bottom: 0;
  background-color: #fff;

  justify-content: space-between;
`;

export const SectionContent = styled.View``;

export const ImageBox = styled.View`
  background-color: #c9bae5;
  width: 100%;
  height: 265px;
  border-radius: 8px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const HeartButton = styled.TouchableOpacity.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
})`
  height: 40px;
  width: 40px;
  background-color: #fff;
  margin-right: 16px;
  top: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;

  elevation: 5;
`;

export const IconHeartEmpty = styled(IconHeart)`
  font-size: 18px;
`;

export const IconHeartFull = styled(IconHeartEmpty)`
  color: #e7736f;
`;

export const ProductTitle = styled.Text`
  font-family: 'Lora-Bold';
  font-size: 24px;
  color: #3c444c;

  margin-top: 24px;
  width: 60%;
  /* background-color: red; */
`;

export const DescriptionTitle = styled(ProductTitle)`
  font-family: 'Lora-SemiBold';
  font-size: 16px;
`;

export const Description = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 14px;
  color: #747d88;

  margin-top: 14px;
  width: 80%;
`;

export const PurchaseContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  /* background-color: green; */

  margin-top: 24px;
`;

export const PricePurchase = styled.Text`
  font-family: 'Lora-Bold';
  font-size: 32px;
  color: #3c3c3c;
`;

export const ButtonContainer = styled.TouchableOpacity`
  background-color: #a278f4;
  border-radius: 8px;
  margin-bottom: 40px;
`;

export const ButtonText = styled.Text`
  font-family: 'Inter-SemiBold';
  font-size: 16px;
  color: #ffffff;
  text-align: center;

  padding: 15px 20px;
`;
