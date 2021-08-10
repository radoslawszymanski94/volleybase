import React, { FC, ChangeEventHandler } from 'react';
import { StyledSearchCard } from './Search.styles';
import { Input } from 'components/atoms/Input/Input';

interface SearchProps {
  search: ChangeEventHandler<HTMLInputElement>;
}

const Search: FC<SearchProps> = ({ search }) => {
  return (
    <StyledSearchCard hoverable bordered={false} title="Search player">
      <Input type="text" name="search" placeholder="Enter player's name" onChange={search} isRounded />
    </StyledSearchCard>
  );
};

export default Search;
