import './App.css';
import { BrowserRouter, Switch, Route, Router, Routes, Link, redirect  } from 'react-router-dom';
import Glowna from './pages/Glowna';
import Opinie from './pages/Opinie';
import Szukaj from './pages/Szukaj';
import Konto from './pages/Konto';
import Layout from './pages/layout';

function App() {
  
  return (

    
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="Glowna" element={<Glowna/>}/>
        <Route path="Dodaj" element={<Opinie/>}/>
        <Route path="Przegladaj" element={<Szukaj/>}/>
        <Route path="Konto" element={<Konto/>}/>
      </Route>
    </Routes>
    
  </BrowserRouter>
    

  );
}

export default App;
