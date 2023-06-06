import { BrowserRouter, Switch, Route, Router, Routes, Link } from 'react-router-dom';
import Opinie from './Opinie';
import Szukaj from './Szukaj';
import Konto from './Konto';
import Layout from './layout';
import Stopka from '../components/Stopka';


function Glowna() {
    return (
      
       <div className='glownaKontener'>
        <h1>Opinie o wszystkim na wyciągnięcie ręki!</h1>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                 proident, sunt in culpa qui officia deserunt mollit anim id est laborum</h4>

         <h1>Dodawaj własne opinie!</h1>
         <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                 proident, sunt in culpa qui officia deserunt mollit anim id est laborum</h4>
    
       </div>
        
    );     
};
export default Glowna;