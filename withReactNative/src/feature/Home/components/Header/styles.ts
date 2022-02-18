import styled from 'styled-components/native';
import IconSearchFeather from 'react-native-vector-icons/Feather';

export const HeaderContainer = styled.View``;

export const HearderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperTexts = styled.View`
  flex-direction: column;
`;

export const TitleText = styled.Text`
  font-family: 'Lora-Bold';
  font-size: 32px;
  color: #3c444c;
`;

export const SubTitleText = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 14px;
  color: #747d88;
`;

export const SearchContainer = styled.View`
  background-color: #f5f7f9;
  padding: 12px;
  border-radius: 8px;
`;

export const SearchContent = styled.View`
  flex-direction: row;
`;

export const SearchTextHover = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 12px;
  color: #cbcfd4;
  align-self: center;
  margin-right: 12px;
`;

export const SearchIcon = styled(IconSearchFeather)`
  font-size: 22px;
`;
