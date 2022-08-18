import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import useVideo from '../hooks/useVideo';
import Spinner from './Spinner/Spinner';
import VideoList from './VideoList';

const VideoContainer = () => {
    const {videoPlaylist,spinner}=useVideo();
    const [player,setPlayer]=useState(0)


    if(spinner){
        return <Spinner/>
    }
    console.log(player);
    return (
    <div className='mx-auto max-w-[1100px] px-2 flex  flex-col lg:flex-row bg-[#121532] p-4 rounded-md'>
       <div className='videoPlayer w-full lg:w-[60%] relative flex flex-col items-center'>
        <div className='title w-full'>
        <h1 className='text-2xl text-white font-medium font-sans my-4'>{videoPlaylist[player]?.title}</h1>
        </div>
       <ReactPlayer className="w-full" url={`https://www.youtube.com/watch?v=${videoPlaylist[player]?.videoId}`} controls={true}/>
       </div>
      <div className='videoList w-full lg:w-[40%]  bg-[#030F21] p-4 rounded-md '>
        <h4 className='text-center text-xl font-extrabold text-gray-300 mb-2'>List of Video</h4>
        <div className='max-h-[400px] overflow-y-scroll'>
            {
                videoPlaylist.map((video,index)=> <VideoList video={video} key={index} index={index} player={player} setPlayer={setPlayer}/> )
            }
        </div>

      </div>
    </div>
    );
};

export default VideoContainer;