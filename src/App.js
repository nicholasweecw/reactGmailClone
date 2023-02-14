import React from 'react';
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
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { selectUser } from './features/userSlice';
import Login from './components/Login';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);

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
