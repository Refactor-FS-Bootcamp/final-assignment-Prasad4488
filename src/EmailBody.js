import React from 'react'
import './css/emailList.css'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { openMessage } from './features/mailSlice'
import { IconButton } from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { db } from './firebase'


const EmailBody = ({name,subject,message,email,time}) => {
  const history=useHistory()
  const dispatch=useDispatch()

  const setMail=()=>{
      dispatch(openMessage({
        name,
        subject,
        message,
        time,
        email
      }))

      history.push('/mail')
  }

  const onDelete =(id)=>{
    if(window.confirm('Are you sure that you want to delete the email ?'))
    {
      db.child(`emails/${id}`).remove((err)=>{
        if(err){
          alert.error(err);
        }
        else{
          alert('email deleted successfully')
        }
      });
    }
    history.push('/mail')
  };
  return (
    <div className='emailbody' onClick={setMail}>
        <div className='emailbody__left'>
            <CheckBoxOutlineBlankIcon />
            <StarBorderIcon />
            <LabelOutlinedIcon />

            <h4>{name}</h4>
        </div>

        <div className='emailbody__middle'>
            <div className='emailbody__middle__msg'>
                <p><b>{subject }</b> {message}</p>
            </div>
        </div>

        <div className='emailbody__right'>
          
          <IconButton className='delete' >
            <DeleteForeverIcon  onClick={()=> onDelete()}/>
          </IconButton>
          <p>{time}</p>  
        </div>

    </div>
  )
}

export default EmailBody