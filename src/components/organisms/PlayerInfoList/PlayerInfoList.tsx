import React from 'react';
import { PlayerInfoItem } from 'components/molecules/PlayerInfoItem/PlayerInfoItem';

const data = {
  name: 'Bartosz Kurek',
  nationality: 'Poland',
  position: 'Outside hitter',
  age: '32',
  club: 'Wolf Dogs'
};

export const PlayerInfoList = () => {
  const { name, nationality, position, age, club } = data;
  return (
    <div>
      <PlayerInfoItem label="Name" value={name} />
      <PlayerInfoItem label="Nationality" value={nationality} />
      <PlayerInfoItem label="Position" value={position} />
      <PlayerInfoItem label="Age" value={age} />
      <PlayerInfoItem label="Club" value={club} />
    </div>
  );
};
