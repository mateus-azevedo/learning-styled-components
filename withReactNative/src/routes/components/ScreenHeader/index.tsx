import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  ButtonBack,
  HeaderContainer,
  HeaderContent,
  HeaderTitle,
  HeaderTitleCenter,
  WrapperItems,
} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ScreenHeader = (props: any) => {
  const navigation = useNavigation();

  return (
    <>
      {props.route.name !== 'Home' ? (
        <HeaderContainer>
          <HeaderContent>
            <ButtonBack
              onPress={() => {
                navigation.goBack();
              }}>
              <MaterialIcons name="arrow-back" size={30} />
            </ButtonBack>

            <HeaderTitleCenter>{props.route.name}</HeaderTitleCenter>

            <MaterialCommunityIcons name="dots-vertical" size={30} />
          </HeaderContent>
        </HeaderContainer>
      ) : (
        <HeaderContainer>
          <HeaderContent>
            <WrapperItems>
              <MaterialCommunityIcons name="menu" size={30} />

              <HeaderTitle>{props.route.name}</HeaderTitle>
            </WrapperItems>

            <MaterialCommunityIcons name="bell-outline" size={30} />
          </HeaderContent>
        </HeaderContainer>
      )}
    </>
  );
};

export default ScreenHeader;
