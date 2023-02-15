import React from 'react'
import { Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import './css/sidebar.css'
import SidebarOptions from './SidebarOptions'
import InboxIcon from '@material-ui/icons/Inbox'
import  StarRateIcon from '@material-ui/icons/StarRate'
import  WatchLaterIcon from '@material-ui/icons/WatchLater'
import  LabelImportantIcon from '@material-ui/icons/LabelImportant'
import  SendIcon from '@material-ui/icons/Send'
import  DraftsIcon from '@material-ui/icons/Drafts'
import  LabelIcon from '@material-ui/icons/Label'
import  DeleteIcon from '@material-ui/icons/Delete'
import  FindInPageIcon from '@material-ui/icons/FindInPage'
import  ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import  VideocamIcon from '@material-ui/icons/Videocam'
import  KeyboardIcon from '@material-ui/icons/Keyboard'
import { useDispatch } from 'react-redux'
import { openSendMessage } from './features/mailSlice'


function Sidebar  ()  {

  const dispatch = useDispatch();
  return (
    <div className='sidebar'>
        <Button startIcon={<AddIcon />} 
        className='compose__btn' onClick={()=>dispatch(openSendMessage())}>Compose</Button>

        <SidebarOptions Icon={InboxIcon} title="Inbox" 
        number="224" isactive={true} />

        <SidebarOptions Icon={StarRateIcon} title={"starred"} 
        number={500}/>

        <SidebarOptions Icon={WatchLaterIcon} title={"Snoozed"} 
        number={300}/>

        <SidebarOptions 
        Icon={
            LabelImportantIcon} title={"Important"}
        number={452}/>

        <SidebarOptions Icon={SendIcon} title={"Sent"} 
        number={254}/>

       <SidebarOptions Icon={DraftsIcon} title={"Drafts"} 
        number={254}/>

       <SidebarOptions Icon={LabelIcon} title={"Category"} 
        number={254}/>

        <SidebarOptions Icon={DeleteIcon} title={"[Map]/Trash"} 
        number={254}/>

        <SidebarOptions Icon={FindInPageIcon} title={"Documents"} 
        number={300}/>

        <SidebarOptions Icon={ExpandMoreIcon} title={"More"} 
        number={300}/>

        <hr />

        <h3 className='sidebarOptions__heading'>
            Meet
        </h3>
          <SidebarOptions Icon={VideocamIcon} title={'New meeting'} />
          <SidebarOptions Icon={KeyboardIcon} title={'Join a meeting'} />


    </div>
  )
}

export default Sidebar