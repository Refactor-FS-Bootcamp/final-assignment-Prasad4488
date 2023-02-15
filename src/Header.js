import React from 'react'
import ReorderIcon from '@material-ui/icons/Reorder';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import  ExpandMoreIcon  from '@material-ui/icons/ExpandMore';
import  HelpOutlineIcon  from '@material-ui/icons/HelpOutline';
import  SettingsIcon  from '@material-ui/icons/Settings';
import  AppsIcon  from '@material-ui/icons/Apps';


import "./css/header.css"
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import firebase from 'firebase';

const Header = () => {
    const user=useSelector(selectUser)
    // console.log(user.photoURL)
  return (
    <div className='header'>
         <div className='header__left'>
         <IconButton>
            <ReorderIcon></ReorderIcon>
         </IconButton>
            <img src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg" alt='logo'/>
        </div>
            <div className='header__middle'>
                <div className='search_mail'>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input type='text' placeholder='Search mail'/>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
                </div>
            </div>  
            <div className='header__right'>
                <IconButton>
                    <HelpOutlineIcon />
                </IconButton>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                    <Avatar src={user?.photoURL} onClick={()=>firebase.auth().signOut()}></Avatar>
            </div>      
    </div>
  )
}

export default Header