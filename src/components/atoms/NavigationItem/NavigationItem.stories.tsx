import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { NavigationItem, NavItemProps } from './NavigationItem';

export default {
  component: NavigationItem,
  title: 'components/atoms/NavigationItem',
  args: {
    children: 'Dashboard',
    path: '/'
  },
  backgrounds: {
    default: 'black'
  }
};

const Template: Story<NavItemProps> = (args) => (
  <div style={{ backgroundColor: '#4F555C', padding: '50px' }}>
    <NavigationItem {...args} />
  </div>
);

export const Default = Template.bind({});
