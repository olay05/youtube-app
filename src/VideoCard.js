import React from 'react'
import "./VideoCard.css"
import { Avatar } from '@mui/material'
// import videomedia from './videos/vi-1.mp4'

function VideoCard({ video, title, channel, views, timestamp, channelImage}) {
  return (
    <div className='videoCard'>
        {/* <img className='videoCard__thumbnail' src={image} alt=""/> */}
        <video className='videoCard__thumbnail'  muted controls src={video} ></video>
        <div className='videoCard__info'>
          <Avatar className='videoCard__avatar' alt={channel} src={channelImage}/>
          <div className='videoCard__text'>
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>{views} . {timestamp}</p>
          </div>
        </div>
     
    </div>
  )
}

export default VideoCard
