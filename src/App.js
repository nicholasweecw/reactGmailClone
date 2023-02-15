import React, { useEffect } from 'react';
import './App.css';
import {
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EmailList from './components/EmailList'
import Mail from './components/Mail';
import SendMail from './components/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './components/Login';
import { auth } from './firebase';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // To persist Google Acct over refreshes
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        // user is logged in
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        }))
      }
    })
  }, [])

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className="App">
          <Header />

          <div className='body'>
            <Sidebar />
            <Routes>
              <Route path='/' element={
                <>
                  <EmailList />
                </>
              }>
              </Route>
              <Route path='/mail' element={<Mail />}>
              </Route>
            </Routes>
          </div>

          {sendMessageIsOpen && <SendMail />}
        </div>)
      }
    </>
  );
}

export default App;
