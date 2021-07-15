import React from 'react';
import { RoundedWrapper } from 'components/atoms/Wrapper/Wrapper.styles';
import styled from 'styled-components';
import { Input } from 'antd';
const { Search } = Input;

export const RoundedSearchWrapper = styled(RoundedWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const SearchBar: React.FC = () => {
  const onSearch = (value) => console.log(value);

  return (
    <RoundedSearchWrapper>
      <Search placeholder="input player's name" allowClear enterButton="Search" size="large" onSearch={onSearch} />
    </RoundedSearchWrapper>
  );
};

export default SearchBar;
