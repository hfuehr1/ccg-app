import React from 'react';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
//@ts-ignore
import Video from '../../videos/video1.mp4';

export default () => {
  return (
    <Player
      playsInline
      src='./video1.mp4'
    />
  );
};
