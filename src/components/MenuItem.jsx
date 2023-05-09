import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Router, Routes, Link } from 'react-router-dom';

export default function MenuItem({name, link}){
    const [name2, setName] = useState(name)
    const [link2, setLink] = useState(link)

    return (
    <div className="menu">
        <Link to={link} className="menuA">{name}</Link>
    </div>
    );
}