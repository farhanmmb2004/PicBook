import "./style.css";
import React, { useContext, useState, useRef, useEffect } from 'react';
import Menu from "./menu";
import { MediaContext } from "./context/context";
import Navigation from "./navigationBar";
import { useNavigate } from 'react-router-dom';

export default function Header({ hideNavigation,mobile }) {
    let [query1, setQuery1] = useState('');
    let [show, setShow] = useState(false);
    let {setQuery,option,setOption } = useContext(MediaContext);
    const menuRef = useRef(null);
    const navigate = useNavigate();

    let handleMenu = () => {
        setShow((prevShow) => !prevShow);
    }

    let handleChange = (e) => {
        setQuery1(e.target.value);
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        setQuery(query1);
        navigate('/search');
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
                   placeholder={option==='home'?"search for images":"search for vidios"}
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
       {(option==='home'||option==='videocam'||option==='search')&&helper()}
{option!=='search'&&<Navigation c={`navigation ${hideNavigation ? 'hidden-navigation' : ''}`}/>}
</>
    );
}
