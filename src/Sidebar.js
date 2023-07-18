import React from 'react';
import SidebarRow from "./SidebarRow";
import HomeIcon from '@mui/icons-material/Home';
import PlayCircleFilledWhiteSharpIcon from '@mui/icons-material/PlayCircleFilledWhiteSharp';
import SubscriptionsSharpIcon from '@mui/icons-material/SubscriptionsSharp';
import QueueSharpIcon from '@mui/icons-material/QueueSharp';
import RestoreSharpIcon from '@mui/icons-material/RestoreSharp';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import ScheduleSharpIcon from '@mui/icons-material/ScheduleSharp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import StreamIcon from '@mui/icons-material/Stream';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "./Sidebar.css";


function Sidebar() {
  return (
    <div className='sidebar'>
     <SidebarRow Icon={HomeIcon} title="Home"/>
     <SidebarRow Icon={PlayCircleFilledWhiteSharpIcon} title="Short"/>
     <SidebarRow Icon={SubscriptionsSharpIcon} title="Subscription"/>

     <hr/>
     
     <SidebarRow Icon={QueueSharpIcon} title="Library"/>
     <SidebarRow Icon={RestoreSharpIcon} title="History"/>
     <SidebarRow Icon={SmartDisplayIcon} title="Your Video"/>
     <SidebarRow Icon={ScheduleSharpIcon} title="Watch Later"/>
     <SidebarRow Icon={ThumbUpOffAltIcon} title="Liked video"/>
     <SidebarRow Icon={StreamIcon} title="Mix-Empire Cast"/>
     <SidebarRow Icon={ExpandMoreIcon} title="More"/>
     
     <hr/>
     
    </div>
  )
}

export default Sidebar