import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import useVideo from './hooks/useVideo';
import VideoList from './VideoList';

const VideoContainer = () => {
    const {videoPlaylist,spinner}=useVideo();
    const [player,setPlayer]=useState(0)


    if(spinner){
        return <p>Loading...</p>
    }
    if (videoPlaylist) {
        // console.log(videoPlaylist);
 
    }
    console.log(player);
    return (
    <div className='mx-auto max-w-[1100px] px-2 flex  flex-col lg:flex-row'>
       <div className='videoPlayer w-full lg:w-[70%] relative flex flex-col items-center'>
        <div className='title w-full'>
        <h1 className='text-2xl text-white font-medium font-sans my-4'>{videoPlaylist[player]?.title.slice(0,30)}</h1>
        </div>
       <ReactPlayer className="w-full" url={`https://www.youtube.com/watch?v=${videoPlaylist[player]?.videoId}`} controls={true}/>
       </div>
      <div className='videoList w-full lg:w-[30%] max-h-[500px] overflow-y-scroll bg-[#242637] p-4 rounded-md '>
        <h4 className='text-center text-xl font-extrabold text-gray-300'>List of Video</h4>
     
       <VideoList/>

      </div>
    </div>
    );
};

export default VideoContainer;