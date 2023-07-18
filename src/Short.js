import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import VideoCard from './VideoCard';
import videomedia from './videos/vi-1.mp4'

function Short() {
  return (
    <div>
     {/* <video className='videoCard__thumbnail'  muted controls src={video} ></video> */}
     {/* <Header />
     <Sidebar /> */}
     <VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" video={videomedia}/> 
    </div>
  )
}

export default Short