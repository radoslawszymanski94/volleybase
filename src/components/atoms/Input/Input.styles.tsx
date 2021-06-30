import styled from 'styled-components';
import {InputProps } from './Input'

export const StyledInput = styled.input<InputProps>`
    background-color: ${({theme}) => theme.colors.lightGray};
    color: ${({theme}) => theme.colors.gray};
    padding: 5px 12px;
    border:none;
    border-radius: ${({isRounded}) => isRounded ? '15px' : '0px'};
`;