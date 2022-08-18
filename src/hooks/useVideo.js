import { useEffect, useState } from "react"

const useVideo=()=>{
const [videoPlaylist,setVideoPlaylist]=useState([])
const [spinner,setSpinner]=useState(false)
useEffect(()=>{
    setSpinner(true)
    const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=20&playlistId=PLHiZ4m8vCp9OBosvRhs8nSBBMzwMeNwGX&key=AIzaSyAtMR9dy3o9VnGqZtEwTtM4iNKYkBAqa5c`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        const playlist = data?.items.map(video=>{
            return {
                title:video?.snippet?.title,
                videoId:video?.contentDetails?.videoId,
                thum: video?.snippet?.thumbnails?.default?.url
                }
        })
        setVideoPlaylist(playlist);
        setSpinner(false)

    })
},[])
return {videoPlaylist,spinner}
}
export default useVideo;