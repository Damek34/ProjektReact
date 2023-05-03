import React, { useState } from 'react';

export default function MenuItem({name, link}){
    const [name2, setName] = useState(name)
    const [link2, setLink] = useState(link)

    return (
    <div className="menu">
        <a href={link} className="menuA">{name}</a>
    </div>
    );
}