import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import EmailList from './EmailList';
import Compose from './Compose';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EmailDetail from './EmailDetail';
import Login from './Login';
import { selectUser, signin, signout } from './features/userSlice';
import { useEffect } from 'react';
import { auth } from './firebase';



function App() {

  const dispatch=useDispatch();

  const isMessageOpen=useSelector(selectSendMessageIsOpen);

  const user=useSelector(selectUser)

  useEffect(()=>{
      auth.onAuthStateChanged((user)=>{
        if(user){
          dispatch(signin({
            displayName:user.displayName,
            photoURL:user.photoURL,
            email:user.email
          }))

        }
        else{
            dispatch(signout())
        }
      })
  },[])
  return (
    <Router>
        {
          user && (
            <div className="App">
            <Header />
            <div className='app__body'>
            <Sidebar />
            <Switch>
              <Route exact path='/'>
              <EmailList />
              </Route>
              <Route path='/mail'>
              <EmailDetail />
              </Route>
            </Switch>
            
           
            </div>
            {
              isMessageOpen && <Compose />
            }
            </div>
          )} : 
          {(

            <Login/>
          )}
          
          </Router>          
  );
}

export default App;
