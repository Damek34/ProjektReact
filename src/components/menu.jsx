import React from 'react';
import MenuItem from './MenuItem';

export default function Menu(){
    const arr = [
        {name: "Glówna", link: 'glowna.html'},
        {name: "Opinie", link: 'opinie.html'},
        {name: "Szukaj", link: 'szukaj.html'},
        {name: "Konto", link: 'konto.html'}
    ]
    return (
    <div className='menu'>
      {arr.map((link) => (
        <MenuItem name={link.name} link={link.link}/>
      ))}
    </div>
  );
}