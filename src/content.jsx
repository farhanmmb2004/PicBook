import { useContext } from "react";
import { MediaContext } from "./context/context";
import './style.css';
export default function Content(){
let{option}=useContext(MediaContext);
return(
<div className=".content">
    <h1 >you are in <h3 style={{color:"red"}}>{option}</h3> section sorry! content for it is not added yet</h1>
    </div>
);
}