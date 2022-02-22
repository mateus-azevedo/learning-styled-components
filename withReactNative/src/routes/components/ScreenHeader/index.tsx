import React from 'react';
import {
  HeaderContainer,
  HeaderContent,
  HeaderTitle,
  HeaderTitleCenter,
  WrapperItems,
} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ScreenHeader = (props: any) => {
  console.log(props.route.name);

  return (
    <>
      {props.route.name !== 'Home' ? (
        <HeaderContainer>
          <HeaderContent>
            <MaterialIcons name="arrow-back" size={30} />

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
