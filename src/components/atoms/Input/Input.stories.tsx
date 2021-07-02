import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Input, InputProps } from './Input';

export default {
  component: Input,
  title: 'components/atoms/Input',
  args: {
    placeholder: 'sign in'
  }
};

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});

export const Rounded = Template.bind({});
Rounded.args = {
  isRounded: true
};
