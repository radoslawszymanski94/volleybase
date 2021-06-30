import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { PlayersListItem, PlayersListItemProps } from './PlayersListItem';

export default {
  component: PlayersListItem,
  title: 'components/atoms/PlayersListItem',
  args: {
    name: 'Bartosz Kurek',
    position: 'O',
    nationality: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSV
    QICAjb4U/gAAAACXBIWXMAAAG7AAABuwE67OPiAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcG
    Uub3Jnm+48GgAAABtQTFRF////9fX1/0pW9fX1/0tV9fX1/0tV9fX1/0tV/iHDbgAAAAd0Uk5TAK
    Gh9/f4+A5axOUAAAAwSURBVEiJY2AYBfQCwqF4gSFDOQEwqmBUAb0VdBAAowpGFdBbgUoaXuA00A
    X9CAIADJeUM2BsJdkAAAAASUVORK5CYII=`,
    isSelected: true
  }
};

const Template: Story<PlayersListItemProps> = (args) => <PlayersListItem {...args} />;

export const Default = Template.bind({});
