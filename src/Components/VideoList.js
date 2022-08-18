import React from 'react';

const VideoList = ({index,setPlayer,player,video}) => {
    const {title,thum}=video
    console.log(index);
    return (
        <div title={title}
        onClick={()=>setPlayer(index)}
        className={`py-4 my-4 mx-2 px-2 border-2 shadow-md rounded-md cursor-pointer flex items-center ${player===index? 'border-blue-500':'border-white'}`}>
            <img src={thum} alt="thum-img" className='mr-2 rounded-md h-[50px]'/>
            <h2 className={`text-gray-400 text-xl ${index===player? 'text-blue-500':'text-gray-400'}`}>{title.length > 40 ?title.slice(0,40)+"...":title}</h2>
        </div>
    );
};

export default VideoList;