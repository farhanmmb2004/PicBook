import './style.css';
import { useContext } from 'react';
import { MediaContext } from './context/context';
import React, { useState } from 'react';

export default function Navigation() {
    const { option, setOption } = useContext(MediaContext);

  return (
    <>
    <div className='nav'>
      <div id='options' onClick={() => setOption('home')}>
        <span 
          className="material-symbols-outlined" 
          id={option === 'home' ? 'selected' : undefined}
        >
          home
        </span>
      </div>

      <div id='options' onClick={() => setOption('videocam')}>
        <span 
          className="material-symbols-outlined" 
          id={option === 'videocam' ? 'selected' : undefined}
        >
          videocam
        </span>
      </div>

      <div id='options' onClick={() => setOption('favorite')}>
        <span 
          className="material-symbols-outlined" 
          id={option === 'favorite' ? 'selected' : undefined}
        >
          favorite
        </span>
      </div>

      <div id='options' onClick={() => setOption('account_circle')}>
        <span 
          className="material-symbols-outlined" 
          id={option === 'account_circle' ? 'selected' : undefined}
        >
          account_circle
        </span>
      </div>
    </div>
    </>
  );
}
