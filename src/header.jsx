import "./style.css";
import React, { useContext,useState } from 'react';
import { MediaContext } from "./context/context";
export default function Header(){
    let[query1,setQuery1]=useState('');
    let {query,setQuery}=useContext(MediaContext);
   let handleChange=(e)=>{
   setQuery1(e.target.value);
   }
   let handleSubmit=(e)=>{
    e.preventDefault();
    setQuery(query1);
   }
return(
    <header>
    <span className="material-symbols-outlined menu" >
menu
</span>
<h2 className="logo">logo</h2>
<div className="search"> <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="don't search 'Nudes'"
                        onChange={handleChange}
                    />
                    </form>
                    </div>
<div className="headicon">
<div><span className="material-symbols-outlined">
add_circle
</span></div>
<div className="notification">
<span className="material-symbols-outlined">
notifications
</span>
</div>
<div className="messege"><span className="material-symbols-outlined">
chat
</span></div>
</div>
    </header>
);
}

