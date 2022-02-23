import React from 'react';
import {
  SearchContainer,
  SearchContent,
  SearchTextHover,
  SearchIcon,
} from './styles';

const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchContent>
        <SearchTextHover>Search product...</SearchTextHover>
        <SearchIcon name="search" />
      </SearchContent>
    </SearchContainer>
  );
};

export default SearchBar;
