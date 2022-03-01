import styled from 'styled-components/native';
import IconHeart from 'react-native-vector-icons/AntDesign';

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: #fff;
`;

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
