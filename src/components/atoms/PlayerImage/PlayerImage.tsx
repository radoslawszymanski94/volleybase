import React from 'react';

interface PlayerImageProps {
  img?: string;
}

const PlayerImage: React.FC<PlayerImageProps> = ({ img }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        margin: '10px 0'
      }}
    />
  );
};

export default PlayerImage;
