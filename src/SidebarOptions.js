import React from 'react'
import './css/sidebarOption.css'

function SidebarOptions  ({Icon,title,number,isactive})  {
  return (
    <div className={`sidebarOptions ${isactive && 'sidebarOption--active'}`}>
        <Icon/>
        <h4>{title}</h4>
        <p>{number}</p>

    </div>
  )
}

export default SidebarOptions