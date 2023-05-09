import React from 'react';
import { BrowserRouter, Switch, Route, Router, Routes, Link } from 'react-router-dom';
import MenuItem from './MenuItem';

export default function Menu(){
    const arr = [
        {name: "Główna"},
        {name: "Opinie"},
        {name: "Szukaj"},
        {name: "Konto"}
    ]
    return (
    <div className='menu'>
      {arr.map((link) => (
        <MenuItem name={link.name}/>
      ))}
    </div>
  );
}