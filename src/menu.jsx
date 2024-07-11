import { MediaContext } from "./context/context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
export default function Menu({setShow}){
    const navigate = useNavigate();
    const{setOption,option}=useContext(MediaContext);
    const handleClick=(query)=>{
        setShow(false);
        if(query==='home'){
            navigate(`/`);
        }
        else if(query==='account_circle'){
            navigate(`/account`);
        }
        else{
            navigate(`/${query}`);
        }
    }
return (
    <menu>
        <h1 className="logo">LOGO</h1>
        <div className={`option ${option==='home'?"cur":""}`}onClick={()=>handleClick('home')} >explore</div>
    <div className={`option ${option==='account_circle'?"cur":""}`}onClick={()=>handleClick('account_circle')}>Your profile</div>
    <div className={`option ${option==='favorite'?"cur":""}`} onClick={()=>handleClick('favorite')}>bookmarks</div>
    <div className={`option ${option==='settings'?"cur":""}`} >settings</div>
    <div className={`option ${option==='about_us'?"cur":""}`}>about us</div>
    </menu>
);
}
