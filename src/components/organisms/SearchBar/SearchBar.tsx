import React from 'react';
import { RoundedWrapper } from 'components/atoms/Wrapper/Wrapper.styles';
import styled from 'styled-components';
import LabeledInput from 'components/molecules/LabeledInput/LabeledInput';
import { Button } from 'components/atoms/Button/Button';

export const StyledWrapper = styled.div`
  display: flex;
  width: 80%;

  & Button {
    height: 40px;
  }
`;

export const RoundedSearchWrapper = styled(RoundedWrapper)`
  min-height: 100px;
  padding: 10px;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 20%;
  margin-left: 20px;
`;

const SearchBar: React.FC = () => {
  return (
    <RoundedSearchWrapper>
      <StyledWrapper>
        <LabeledInput label="Player's name" placeholder="find player" isRounded />
        <StyledButtonWrapper>
          <Button isPrimary isRounded>
            Find
          </Button>
        </StyledButtonWrapper>
      </StyledWrapper>
    </RoundedSearchWrapper>
  );
};

export default SearchBar;
