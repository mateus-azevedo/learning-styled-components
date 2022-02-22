import React from 'react';
import {
  HeaderContainer,
  HeaderContent,
  HeaderTitle,
  WrapperItems,
} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ScreenHeader = (props: any) => {
  console.log(props.route.name);

  return (
    <HeaderContainer>
      <HeaderContent>
        <WrapperItems>
          <MaterialCommunityIcons name="menu" size={30} />

          <HeaderTitle>{props.route.name}</HeaderTitle>
        </WrapperItems>

        <MaterialCommunityIcons name="bell-outline" size={30} />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default ScreenHeader;
