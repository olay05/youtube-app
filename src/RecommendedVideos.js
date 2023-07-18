import React from 'react';
import VideoCard from './VideoCard';
import "./RecommendedVideos.css";
// import Header from './Header';
// import Sidebar from './Sidebar';
// import Football from "./img/football.jpg"
// import Lady from "./img/hat.jpg"
// import Yellow from "./img/lady.avif"
// import Foot from "./img/foot.webp"
// import Wakada from "./img/wakada.jpg"
// import Fashion from "./img/fashion.jpg"
// import AMC from "./img/amc.jpg"
// import DOM from "./img/dom.jpg"
// import BBC from "./img/bbc.png"
import videomedia from './videos/vi-1.mp4'
import videomediatwo from './videos/vi-2.mp4'
import videomediathree from './videos/vi-3.mp4'
import videomediafour from './videos/vi-4.mp4'



function RecommendedVideos() {
  return (
    <>
     


    <div className='recommendedVideos'>
    {/* <Header />
       <Sidebar /> */}
        <h2>Recommended</h2>
        <div className='recommendedVideos__videos' >
       
       

       <VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" video={videomedia}/> 

        <VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" video={videomediatwo}/>

        <VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" video={videomediafour}/>

        <VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" video={videomediathree}/>

        <VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" video={videomediatwo}/>

        <VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" video={videomedia}/>

<VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" video={videomediatwo}/>

<VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" video={videomediafour}/>

<VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" video={videomediathree}/>

<VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" video={videomediatwo}/>



<VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" video={videomediafour}/>

<VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" video={videomediathree}/>

<VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" video={videomediatwo}/>

<VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" video={videomedia}/>

<VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" video={videomediatwo}/>

<VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" video={videomediafour}/>

<VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" video={videomediathree}/>

<VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" video={videomediatwo}/>

        {/* <VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" image="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"/>

        <VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" image={Foot}/>

        

        <VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" image={Lady}/>

        <VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" image={Wakada}/> 

        <VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" image={Fashion}/> 

        <VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" image={AMC}/> 

        
        <VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" image={Foot}/>


        <VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" image="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"/>

        <VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" image={Yellow} />

        <VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" image={Foot}/>

        <VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" image="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"/>

        
        <VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" image={Wakada}/> 

        <VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" image={Fashion}/> 

        <VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" image={AMC}/> 
        
        <VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" image={BBC}/>

        <VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" image={Fashion}/> 

        
        <VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" image={DOM}/>

        <VideoCard title="Messi Skills | 2021/2022" views="27M views" timestamp="5 days ago" channelImage="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg " channel="Yinka'sTV" image={AMC}/> 

         */}
        </div>

    </div>

    </>
  )
}

export default RecommendedVideos