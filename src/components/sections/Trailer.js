import React from 'react';
import { Player , BigPlayButton } from 'video-react';
import BG from '../../assets/BP_Trailer.mp4'
import BGC from '../../assets/bg-cover-text.png';


export default props => {
  return (
    <Player poster={BGC}>
      <source src={BG} />
      <BigPlayButton position="center" />
    </Player>
  );
};