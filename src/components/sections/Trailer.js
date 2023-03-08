import React from 'react';
import { Player , BigPlayButton, ControlBar } from 'video-react';
import BG from '../../assets/BP_Trailer_v4.mp4'
import BGC from '../../assets/bg-cover-text.png';


export default props => {
  return (
    <Player poster={BGC}>
      <source src={BG} />
      <ControlBar disabled />
      <BigPlayButton position="center" />
    </Player>
  );
};