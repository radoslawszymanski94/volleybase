import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { PlayerInfoItem, PlayerInfoItemProps } from './PlayerInfoItem';

export default {
  component: PlayerInfoItem,
  title: 'components/molecules/PlayerInfoItem',
  args: {
    label: 'Name',
    value: 'Bartosz'
  }
};

const Template: Story<PlayerInfoItemProps> = (args) => <PlayerInfoItem {...args} />;

export const Default = Template.bind({});
