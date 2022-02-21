import React from 'react';
import {HeaderContainer, HeaderContent, HeaderTitle} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HeaderTest = (props: any) => {
  console.log(props.route.name);

  return (
    <HeaderContainer>
      <HeaderContent>
        <MaterialCommunityIcons name="menu" size={38} />

        <HeaderTitle>{props.route.name}</HeaderTitle>

        <MaterialCommunityIcons name="bell-outline" size={38} />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default HeaderTest;
