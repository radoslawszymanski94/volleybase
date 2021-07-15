import styled from 'styled-components';

export interface RoundedWrapperProps {
  theme: Object;
}

export const RoundedWrapper = styled.div<RoundedWrapperProps>`
  display: grid;
  grid-template-rows: 0.6fr 0.4fr;
  width: 100%;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.white};
`;
