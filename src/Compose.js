import React, { useState } from 'react'
import './css/compose.css'
import RemoveIcon from '@material-ui/icons/Remove';
import HeightIcon from '@material-ui/icons/Height';
import CloseIcon from '@material-ui/icons/Close';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import FormatColorTextIcon from '@material-ui/icons/FormatColorText';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import LinkIcon from '@material-ui/icons/Link';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import PhotoIcon from '@material-ui/icons/Photo';
import PhonelinkLockIcon from '@material-ui/icons/PhonelinkLock';
import CreateIcon from '@material-ui/icons/Create';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import firebase from "firebase"
import { db } from './firebase';
import { selectUser } from './features/userSlice';


const Compose = () => {

    const [to,setTo]=useState("");
    const [subject,setSubject]=useState("");
    const [message,setMessage]=useState("");



    const dispatch=useDispatch();

    const user=useSelector(selectUser)

    const formSubmit=(e)=>{
        e.preventDefault();
        if(to===""){
            return alert('to is required');
        }
        if(subject===""){
            return alert('subject is required');
        }
        if(message===""){
            return alert('message is required');
        }

        db.collection("emails").add({
            to:to,
            subject:subject,
            message:message,
            from:user.email,
            fromName:user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setTo("");
        setSubject("");
        setMessage("");
        alert('email send successfully')
        dispatch(closeSendMessage());
    }
  return (
    <div className='compose'>
        <div className='compose__header'>
            <div className='compose__header__left'>
                <span>New Message</span>
            </div>
            <div className='compose__header__right'>
                <RemoveIcon />
                <HeightIcon />
                <CloseIcon  onClick={()=>dispatch(closeSendMessage())}/>
            </div>
        </div>
        <form onSubmit={formSubmit}>
        <div className='compose__body'>
            <div className='compose__bodyform'>
                <input type='email' name='email'
                placeholder='Reciepents' value={to} onChange={(e)=> setTo(e.target.value)}/>

                <input type='text' name='subject'
                placeholder='Subject' value={subject} onChange={(e)=> setSubject(e.target.value)}/>
            
                <textarea rows='20' name='message' onChange={(e)=> setMessage(e.target.value)}>{message}</textarea>
            </div>

        </div>
        <div className='compose__footer'>
            <div className='compose__footerleft'>
                <button type='submit'>Send<ArrowDropDownIcon/></button>
            </div>
            <div className='compose__footerright'>
                    <FormatColorTextIcon/>
                    <AttachFileIcon/>
                    <LinkIcon/>
                    <InsertEmoticonIcon/>
                    <NoteAddIcon/>
                    <PhotoIcon/>
                    <PhonelinkLockIcon/>
                    <CreateIcon/>
                    <MoreVertIcon/>
                    <DeleteIcon/>
            </div>

        </div>
        </form>
    </div>
  )
}

export default Compose