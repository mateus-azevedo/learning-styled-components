import React from 'react';
import {
  HeaderContainer,
  HearderContent,
  SearchContainer,
  SearchContent,
  SearchIcon,
  SearchTextHover,
  SubTitleText,
  TitleText,
  WrapperTexts,
} from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <HearderContent>
        <WrapperTexts>
          <TitleText>Discover</TitleText>
          <SubTitleText>New Collections</SubTitleText>
        </WrapperTexts>

        <SearchContainer>
          <SearchContent>
            <SearchTextHover>Search...</SearchTextHover>
            <SearchIcon name="search" />
          </SearchContent>
        </SearchContainer>
      </HearderContent>
    </HeaderContainer>
  );
};

export default Header;
