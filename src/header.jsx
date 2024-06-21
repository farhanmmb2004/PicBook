import "./style.css";
import React, { useContext } from 'react';
export default function Header(){
return(
    <header>
    <span className="material-symbols-outlined menu" >
menu
</span>
<h2 className="logo">logo</h2>
<div className="search"><input type="text" placeholder="  search for 'admin'" /></div>
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
// {`material-symbols-outlined menu ${isMobile&&"rotate"}`}
