import { MediaContext } from "./context/context";
import { useContext } from "react";
export default function Menu(){
    const{setOption,option}=useContext(MediaContext);
return (
    <menu>
        <h1 className="logo">LOGO</h1>
        <div className={`option ${option==='home'?"cur":""}`} >explore</div>
    <div className={`option ${option==='account_circle'?"cur":""}`}>Your profile</div>
    <div className={`option ${option==='favorite'?"cur":""}`} >bookmarks</div>
    <div className={`option ${option==='settings'?"cur":""}`} >settings</div>
    <div className={`option ${option==='about_us'?"cur":""}`}>about us</div>
    </menu>
);
}
