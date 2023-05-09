import './App.css';
import { BrowserRouter, Switch, Route, Router, Routes, Link } from 'react-router-dom';
import Menu from './components/menu'
import Glowna from './pages/Glowna';
import Opinie from './pages/Opinie';
import Szukaj from './pages/Szukaj';
import Konto from './pages/Konto';

function App() {
  return (
    <BrowserRouter>
      <div className='body'>
        <nav>
          <Menu />
        </nav>
        <Routes>
          <Route path="./pages/glowna" component={Glowna} />
          <Route path="./pages/opinie" component={Opinie} />
          <Route path="./pages/szukaj" component={Szukaj} />
          <Route path="./pages/Konto" component={Konto} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
