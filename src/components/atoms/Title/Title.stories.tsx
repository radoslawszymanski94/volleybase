import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import {Title, TitleProps} from './Title.styles';

export default {
    component: Title,
    title: 'components/atoms/Title',
    args: {
        children: 'Players',
    }
};

const Template: Story<TitleProps> = (args) => <Title {...args} />;
  
export const SmallTitle = Template.bind({});

export const BigTitle = Template.bind({});
BigTitle.args = { isBig: true };





