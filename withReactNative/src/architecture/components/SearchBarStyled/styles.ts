import styled from 'styled-components/native';
import IconFeather from 'react-native-vector-icons/Feather';

export const SearchContainer = styled.View`
  background-color: #f5f7f9;
  padding: 12px;
  border-radius: 8px;
`;

export const SearchContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SearchTextHover = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 12px;
  color: #cbcfd4;
  align-self: center;
  margin-right: 12px;
`;

export const SearchIcon = styled(IconFeather)`
  font-size: 22px;
`;
