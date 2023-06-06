import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Router, Routes, Link } from 'react-router-dom';
import Menu from '../components/menu'
import {Outlet} from "react-router-dom";
import Stopka from '../components/Stopka';
import './CSS.css'



export default function Layout(){
   
    return (
        <div className='body'>
        <nav>
          <Menu>
         
          </Menu>
        </nav>
        <Outlet />

    <div className='stopka'>
        <hr></hr>

        <Stopka></Stopka>
        </div>
    </div>

  );
}