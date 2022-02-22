import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #a278f4;
  border-radius: 8px;
  margin-bottom: 66px;
`;

export const Content = styled.View`
  padding: 30px 15px;
`;

export const AnnouceContainer = styled.View`
  margin-bottom: 24px;
`;

export const AnnounceTitle = styled.Text`
  font-family: 'Lora-SemiBold';
  font-size: 24px;
  color: #fff;
`;

export const AnnouceSubTitle = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 12px;
  color: #fff;
`;

export const BuyButtonContainer = styled.TouchableOpacity`
  background-color: #3c444c;
  align-self: flex-start;
  border-radius: 8px;
`;

export const BuyButtonContent = styled.View`
  padding: 5px 15px;
`;

export const BuyButtonText = styled(AnnouceSubTitle)`
  font-family: 'Inter-Semibold';
`;
