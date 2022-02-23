import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  background-color: #fff;
  padding: 0 24px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const WrapperItems = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const HeaderTitle = styled.Text`
  font-family: 'Lora-Bold';
  font-size: 24px;
  color: #3c444c;

  margin-left: 20px;
`;

export const HeaderTitleCenter = styled(HeaderTitle)`
  margin: 0;
`;

export const ButtonBack = styled.TouchableOpacity``;
