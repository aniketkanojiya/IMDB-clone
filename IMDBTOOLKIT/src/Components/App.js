import React from "react";

import Home from "../Pages/Home";
import Movies from "../Pages/Movies";
import { Routes, Route } from "react-router-dom"
import Watchlist from "../Pages/Watchlist";
import Card from "../Pages/Card";
import { useState, useEffect } from 'react';
import {fetchApiData} from './Redux/movieFetch';
import { useDispatch, useSelector } from "react-redux";
import SignUp from "../Pages/SignUp";

function App() {
    const dispatch =useDispatch();
    const {data:Users, status}= useSelector((state)=> state.apifetch)

  useEffect(()=>{
    dispatch(fetchApiData());
  },[]);


  return (
    

    
    <div className="App">
      
     
     <Routes>
        <Route path="/" element={ <Home  Users={Users}/> } />
        <Route path="/:id" element={ <Card Users={Users}/> } />
        <Route path="Watchlist" element={ <Watchlist/> } />
        <Route path="sign" element={ <SignUp/> } />
       
      </Routes>
    
    </div>
  );
}

export default App;
