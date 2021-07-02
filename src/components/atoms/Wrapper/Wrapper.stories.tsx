import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { RoundedWrapper, RoundedWrapperProps } from './Wrapper.styles';

export default {
  component: RoundedWrapper,
  title: 'components/atoms/Wrapper'
};

const Template: Story<RoundedWrapperProps> = (args) => <RoundedWrapper {...args} />;

export const Default = Template.bind({});
