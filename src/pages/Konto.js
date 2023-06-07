import React, { useState } from 'react';
import './CSS/Konto.css';

function Konto() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoggedIn(true);
    setLogin('');
    setPassword('');
  };

  return (
    <div className='kontener'>
      {isLoggedIn ? (
        <h1>Zalogowano</h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Login:
              <input type="text" value={login} onChange={handleLoginChange} />
            </label>
          </div>
          <div>
            <label>
              Hasło:
              <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
          </div>
          <div>
            <br></br>
            <button type="submit">Zaloguj się</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Konto;
