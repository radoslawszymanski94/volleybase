import React from 'react';
// import { Story } from '@storybook/react/types-6-0';
import Navigation from './Navigation';

export default {
  component: Navigation,
  title: 'components/organisms/Navigation'
};

const Template = (args) => <Navigation {...args} />;

export const Default = Template.bind({});
