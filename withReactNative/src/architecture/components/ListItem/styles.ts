import styled from 'styled-components/native';
import IconHeart from 'react-native-vector-icons/AntDesign';

export const Container = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
})`
  border-radius: 8px;
  margin-bottom: 18px;
`;

export const Content = styled.View`
  flex-direction: row;
  background-color: #fff;
  border-radius: 8px;
`;

export const ProductImage = styled.View`
  background-color: #c9bae5;
  width: 32.5%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const DescriptionContent = styled.View`
  flex: 1;
  padding: 18px;
`;

export const ProductName = styled.Text`
  font-family: 'Lora-Medium';
  font-size: 16px;
  width: 70%;
  margin-bottom: 5px;
`;

export const ProductPrice = styled.Text`
  font-family: 'Lora-Bold';
  font-size: 18px;
`;

export const IconHeartEmpty = styled(IconHeart)`
  align-self: flex-end;
  font-size: 18px;
`;

export const IconHeartFull = styled(IconHeartEmpty)`
  color: #e7736f;
`;
