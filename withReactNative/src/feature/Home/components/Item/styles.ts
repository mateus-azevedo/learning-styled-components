import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.34,
  shadowRadius: 6.27,

  elevation: 10,
})``;

export const Content = styled.View`
  flex-direction: row;
  background-color: #fff;
  border-radius: 8px;
`;

export const ProductImage = styled.View`
  background-color: #c9bae5;
  width: 112px;
  height: 131px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const DescriptionContent = styled.View`
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
