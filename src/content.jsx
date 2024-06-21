import { useContext } from "react";
import { MediaContext } from "./context/context";
import './style.css';
import Card from "./card";
export default function Content(){
let{option}=useContext(MediaContext);
return(
<div className=".content">
    {option!=='home'&&<h1 >you are in <h3 style={{color:"red"}}>{option}</h3> section sorry! content for it is not added yet</h1>}
    {option==='home'&&<Card option={option}/>}
    </div>
    
);
}