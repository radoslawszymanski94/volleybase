import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Label, LabelProps } from './Label.styles';

export default {
  component: Label,
  title: 'components/atoms/Label',
  args: {
    children: "Player's name"
  }
};

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
