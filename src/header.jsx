import "./style.css";
import React, { useContext, useState, useRef, useEffect } from 'react';
import Menu from "./menu";
import { MediaContext } from "./context/context";
import Navigation from "./navigationBar";

export default function Header({ hideNavigation,mobile }) {
    let [query1, setQuery1] = useState('');
    let [show, setShow] = useState(false);
    let {setQuery,option } = useContext(MediaContext);
    const menuRef = useRef(null);

    let handleMenu = () => {
        setShow((prevShow) => !prevShow);
    }

    let handleChange = (e) => {
        setQuery1(e.target.value);
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        setQuery(query1);
    }

    useEffect(() => {
        const handleTouchOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShow(false);
            }
        };

        document.addEventListener('touchstart', handleTouchOutside);

        return () => {
            document.removeEventListener('touchstart', handleTouchOutside);
        };
    }, []);
   const helper=()=>{
   return <>
   <header>
       <div onClick={handleMenu}>
           <span className="material-symbols-outlined menu">
               menu
           </span>
       </div>
       {(mobile) && (
           <div ref={menuRef} className={show ? "show1" : "hide1"}>
               <Menu />
           </div>
       )}
       <h2 className="logo">logo</h2>
       <div className="search">
           <form onSubmit={handleSubmit}>
               <input
                   type="text"
                   placeholder="don't search 'Nudes'"
                   onChange={handleChange}
               />
           </form>
       </div>
       <div className="headicon">
           <div><span className="material-symbols-outlined">add_circle</span></div>
           <div className="notification"><span className="material-symbols-outlined">notifications</span></div>
           <div className="messege"><span className="material-symbols-outlined">chat</span></div>
       </div>
</header></>
   }
    return (<>
       {(option==='home'||option==='videocam')&&helper()}
<Navigation c={`navigation ${hideNavigation ? 'hidden-navigation' : ''}`}/>
</>
    );
}
