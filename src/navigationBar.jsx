import './style.css';
import { useContext } from 'react';
import { MediaContext } from './context/context';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation({c}) {
  const { option, setOption } = useContext(MediaContext);

  return (
    <div className={`nav ${c}`} style={{position:'sticky',top:0}} >
      <div id='options' onClick={() => setOption('home')}>
        <Link to="/">
          <span
            className="material-symbols-outlined"
            id={option === 'home' ? 'selected' : undefined}
          >
            home
          </span>
        </Link>
      </div>

      <div id='options' onClick={() => setOption('videocam')}>
        <Link to="/videocam">
          <span
            className="material-symbols-outlined"
            id={option === 'videocam' ? 'selected' : undefined}
          >
            videocam
          </span>
        </Link>
      </div>

      <div id='options' onClick={() => setOption('favorite')}>
        <Link to="/favorite">
          <span
            className="material-symbols-outlined"
            id={option === 'favorite' ? 'selected' : undefined}
          >
            favorite
          </span>
        </Link>
      </div>

      <div id='options' onClick={() => setOption('account_circle')}>
        <Link to="/account">
          <span
            className="material-symbols-outlined"
            id={option === 'account_circle' ? 'selected' : undefined}
          >
            account_circle
          </span>
        </Link>
      </div>
    </div>
  );
}