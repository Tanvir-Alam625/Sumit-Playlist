import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
    return (
     <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'  controls={true}/>
    );
};

export default VideoPlayer;