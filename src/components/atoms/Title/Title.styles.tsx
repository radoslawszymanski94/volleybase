import React from 'react'
import styled from 'styled-components';

export interface TitleProps {
    children: string,
    isBig?: boolean
}

export const Title = styled.h1<TitleProps>`
    color: ${({theme}) => theme.colors.gray};
    font-size: ${({theme, isBig}) => isBig ? theme.fontSizes.xxl : theme.fontSizes.l};
`;