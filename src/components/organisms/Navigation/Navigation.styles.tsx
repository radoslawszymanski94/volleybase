import styled from 'styled-components';

export const StyledNav = styled.nav`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.darkGray};
  display: grid;
  grid-template-columns: 0.85fr 0.15fr;
`;

export const StyledNavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 50px;
`;

export const StyledNavButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 50px;
`;
