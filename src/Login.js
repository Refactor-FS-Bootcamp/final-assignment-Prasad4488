import React from 'react'
import { useDispatch } from 'react-redux'
import './css/login.css'
import { signin } from './features/userSlice'
import { auth, provider } from './firebase'

const Login = () => {

  const dispatch=useDispatch()
  const login=()=>{
    auth.signInWithPopup(provider).then(({user})=>{
        dispatch(signin({
          displayName:user.displayName,
          photoURL:user.photoURL,
          email:user.email
        }))

    }).catch(error=>{
      alert(error)
    })
  }
  return (
    <div className='loginwrapper'>
        <div className='login'>
            <img src='https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg'/>
              <button className='btn' onClick={login}>Login with Gmail</button>
        </div>

    </div>
  )
}

export default Login