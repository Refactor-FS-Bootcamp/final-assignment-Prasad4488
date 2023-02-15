import React from 'react'
import InboxIcon from '@material-ui/icons/Inbox'
import PeopleIcon from '@material-ui/icons/People'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import './css/emailList.css'

const EmailType = () => {
  return (
    <div className='emailType'>
        <div className='emailType__options emailType__options--active'>
            <InboxIcon/>
            <p>Primary</p>
        </div>

        <div className='emailType__options'>
            <PeopleIcon/>
            <p>Social</p>
        </div>

        <div className='emailType__options'>
            <LocalOfferIcon/>
            <p>Pramotions</p>
        </div>
    </div>
  )
}

export default EmailType