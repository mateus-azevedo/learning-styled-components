import React from 'react';
import {HeaderContainer, Title} from './styles';

const RouterHeader = (props: any) => {
  console.log(props);

  return (
    <HeaderContainer>
      <Title>{props.children}</Title>
    </HeaderContainer>
  );
};

export default RouterHeader;
