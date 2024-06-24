import { useState } from "react";
export default function Card({data}){
    let[liked,setLiked]=useState(false);
    return (
         <div className="card">
            <div className="cardh">
             <img src={data.userImageURL}/>
             <h4>{data.user}</h4>
            </div>
            <div className="cardd">
            {data.tags}
            </div>
            <div className="cardm"> <img className="post" src={data.largeImageURL} />  </div>
            <div className="cardf">
            <div className="helper">
            <span onClick={()=>{setLiked(!liked)}} class="material-symbols-outlined like" style={liked?{backgroundColor:"blue"}:{backgroundColor:""}}>
            thumb_up
            </span>{data.likes}
            <span class="material-symbols-outlined comment">
            mode_comment 
            </span> <p>{data.comments}</p>
            </div>
            <p></p>
            </div>
        </div>
    );
}