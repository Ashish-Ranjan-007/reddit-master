// import Header from './Components/Header/Header';
// import Upvote from './Components/Upvote/Upvote';
import React from 'react';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
// import {userData} from "./Components/LocalStorage/Userdata";
import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Routes,Route } from 'react-router-dom';
import Posts from './Components/Posts/Posts';


// import { useNavigate } from 'react-router-dom';

function App() {


  // const login =() => {
  //     <Login />
  // };
  return (
    <>

    <div className="App">
    <div className="app-item app-item1"><h1>Reddit App</h1></div></div>
    <div className="app-item app-item2"><Navbar /></div>
    <Routes>
          <Route path="/" element={<Posts/>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<SignUp/>}/>
          <Route path="/posts" element={<Posts/>}/>    
    </Routes>

    </>

  );
}

export default App;
