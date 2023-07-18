import React from 'react'
import "./SidebarRow.css"


function SidebarRow({ selected, Icon, title}) {
  return (
    <div className= {`sidebarRow ${selected && "selected"}`}> 
        <Icon className='sidebarRow__icon' />
       <h5  className='siderbarRow__title'>{title}</h5>    
        
        </div>
  )
}

export default SidebarRow