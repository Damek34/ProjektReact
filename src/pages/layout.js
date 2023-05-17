import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Router, Routes, Link } from 'react-router-dom';
import Menu from '../components/menu'
import {Outlet} from "react-router-dom";


export default function Layout(){
   
    return (
        <div className='body'>
        <nav>
          <Menu>
          <Link name="Glowna" link="/"/>
          <Link name="Opinie" link="/"/>
          <Link name="Szukaj" link="/"/>
          <Link name="Konto" link="/"/>
          </Menu>
        </nav>
        <Outlet />
    </div>

  );
}