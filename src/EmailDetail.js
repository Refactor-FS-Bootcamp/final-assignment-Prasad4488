import React from 'react'

import { Avatar, IconButton } from '@material-ui/core'
import  ArrowBackIcon from '@material-ui/icons/ArrowBack'
import  ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import  RefreshIcon from '@material-ui/icons/Refresh'
import  MoreVertIcon from '@material-ui/icons/MoreVert'
import  ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import  ChevronRightIcon from '@material-ui/icons/ChevronRight'
import  LabelImportantIcon from '@material-ui/icons/LabelImportant'
import  PrintIcon from '@material-ui/icons/Print'
import  LaunchIcon from '@material-ui/icons/Launch'
// import  Avatar from '@material-ui/icons/Avatar'
import  StarIcon from '@material-ui/icons/Star'
import  ReplyIcon from '@material-ui/icons/Reply'
import './css/emailList.css'
import { LabelImportant } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectdMail } from './features/mailSlice'

const EmailDetail = () => {
    const selectedMail=useSelector(selectdMail);
    const history=useHistory()
  return (
    <div className='emailDetail'>

            <div className='emaillist__settings'>
            <div className='emaillist__settingsLeft'>
            <IconButton>
                <ArrowBackIcon onClick={()=>history.push('/')} />
            </IconButton>
            <IconButton>
                <ArrowDropDownIcon />
            </IconButton>
            <IconButton>
                <RefreshIcon />
            </IconButton>
            <IconButton>
                <MoreVertIcon />
            </IconButton>
            </div>
            <div className='emaillist__settingsRight'>
            <p> 1-50 of 10,222</p>
            <IconButton>
                <ChevronLeftIcon />
            </IconButton>
            <IconButton>
                <ChevronRightIcon />
            </IconButton>
            </div>
        </div>
        <div className='emailDetails__message'>
        <div className='emailDetail__header'>
        <div className='emailDetail__headerleft'>
            <h4>{selectedMail.subject}</h4>
                <IconButton>
                    <LabelImportantIcon/>
                </IconButton>
        </div>
        <div className='emailDetail__headerright'>
                <IconButton>
                    <PrintIcon/>
                </IconButton>
                <IconButton>
                    <LaunchIcon/>
                </IconButton>
        </div>

        </div>
        <div className='emailDetail__middelheader'>
        <div className='emailDetail__middelheaderleft'>
                <IconButton>
                    <Avatar/>
                </IconButton>
            <h4>{selectedMail.name}</h4>
            <p>{selectedMail.email}</p>
        </div>
        <div className='emailDetail__middelheaderright'>
                <IconButton>
                    <StarIcon/>
                </IconButton>
                <IconButton>
                    <ReplyIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
        </div>

        </div>
        <div className='emailDetails__body'>
            <p>{selectedMail.message} </p>
            
        </div>
    </div>
    </div>
  )
}

export default EmailDetail