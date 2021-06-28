import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {Button, ButtonProps} from './Button';

export default {
    component: Button,
    title: 'components/atoms/Button',
    args: {
        children: 'Sign in',
    }
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;
  
export const Primary = Template.bind({});
Primary.args = { isPrimary: true };

export const Secondary = Template.bind({});

export const PrimaryRounded = Template.bind({});
PrimaryRounded.args = { isPrimary: true, isRounded: true };

export const SecondaryRounded = Template.bind({});
SecondaryRounded.args = { isRounded: true };

export const PrimaryBig = Template.bind({});
PrimaryBig.args = { isPrimary: true, isBig: true };

export const SecondaryBig = Template.bind({});
SecondaryBig.args = { isBig: true };

export const PrimaryRoundedBig = Template.bind({});
PrimaryRoundedBig.args = { isPrimary: true, isRounded: true, isBig: true };

export const SecondaryRoundedBig = Template.bind({});
SecondaryRoundedBig.args = { isRounded: true, isBig: true };





