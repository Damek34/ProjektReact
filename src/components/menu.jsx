import React from 'react';
import { BrowserRouter, Switch, Route, Router, Routes, Link } from 'react-router-dom';
import MenuItem from './MenuItem';

export default function Menu(){
    const arr = [
        {name: "Główna", URL: "Glowna"},
        {name: "Dodaj", URL: "Dodaj"},
        {name: "Przeglądaj", URL: "Przegladaj"},
        {name: "Konto", URL: "Konto"}
    ]
    return (
    <div className='menu'>
      {arr.map((link) => (
        <MenuItem name={link.name} link={link.URL}/>
      ))}
    </div>
  );
}