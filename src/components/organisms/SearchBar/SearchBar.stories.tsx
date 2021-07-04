import React from 'react';
import SearchBar from './SearchBar';

export default {
  component: SearchBar,
  title: 'components/organisms/SearchBar'
};

const Template = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
