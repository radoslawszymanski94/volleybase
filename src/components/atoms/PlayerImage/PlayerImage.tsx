import React from 'react';
import { StyledImage } from './PlayerImage.styles';

interface PlayerImageProps {
  src: 'string';
}

const PlayerImage: React.FC<PlayerImageProps> = (props) => {
  return <StyledImage alt="Player image" {...props} />;
};

export default PlayerImage;
