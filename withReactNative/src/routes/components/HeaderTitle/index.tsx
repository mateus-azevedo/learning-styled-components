import React from 'react';
import {HeaderContainer, Title} from './styles';

const HeaderTitle = (props: any) => {
  console.log(props);

  return (
    <HeaderContainer>
      <Title>{props.children}</Title>
    </HeaderContainer>
  );
};

export default HeaderTitle;
