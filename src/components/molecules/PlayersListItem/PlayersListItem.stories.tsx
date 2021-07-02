import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { PlayersListItem, PlayersListItemProps } from './PlayersListItem';
import { flagIcon } from 'assets/images/base64icons';

export default {
  component: PlayersListItem,
  title: 'components/molecules/PlayersListItem',
  args: {
    name: 'Bartosz Kurek',
    position: 'O',
    nationality: flagIcon,
    isSelected: true
  }
};

const Template: Story<PlayersListItemProps> = (args) => <PlayersListItem {...args} />;

export const Default = Template.bind({});
