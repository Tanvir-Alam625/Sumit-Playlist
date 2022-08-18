import React from 'react';

const VideoList = ({index,setPlayer,player}) => {
    console.log(index);
    return (
        <div
        onClick={()=>setPlayer(index)}
        className='py-4 my-4 px-2 border shadow-md rounded-md'>
            <h2 className={`text-gray-200 ${index===player&& 'text-gray-50'}`}>Title is</h2>
        </div>
    );
};

export default VideoList;