import React from 'react';
import { PlayerInfo } from './PlayerInfo';

export default {
  component: PlayerInfo,
  title: 'components/organisms/PlayerInfo'
};

const Template = (args) => <PlayerInfo {...args} />;

export const Default = Template.bind({});
