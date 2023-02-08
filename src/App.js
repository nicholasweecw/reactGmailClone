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

function App() {
  return (
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

      <SendMail />
    </div>
  );
}

export default App;
