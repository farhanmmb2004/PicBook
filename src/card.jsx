import { useState } from "react";
import { useContext } from "react";
import { MediaContext } from "./context/context";
export default function Card({data,flag}){
    let[liked,setLiked]=useState({
        likes:data.likes,
        isliked:flag
    });
    let { likes, setLikes } = useContext(MediaContext);
    let handlelike=()=>{
    if(liked.isliked){
    setLiked({
        likes:data.likes,
        isliked:false
    });
    setLikes(likes=>likes.filter(like=>like.id!==data.id));
    }
    else{
        setLiked({
            likes:data.likes+1,
            isliked:true
        });
        setLikes([...likes,data]);
    }
    }
    return (
         <div className="card">
            <div className="cardh">
             <img src={data.userImageURL}/>
             <h4>{data.user}</h4>
            </div>
            <div className="cardd">
            {data.tags}
            </div>
            <div className="cardm"> <img className="post" src={data.largeImageURL} onDoubleClick={handlelike}/>  </div>
            <div className="cardf">
            <div className="helper">
            <i onClick={handlelike} className="fa-solid fa-thumbs-up like" style={liked.isliked?{color:"blue"}:{backgroundColor:""}} ></i>
            {liked.likes}
            <span className="material-symbols-outlined comment">
            mode_comment 
            </span> <p>{data.comments}</p>
            </div>
            <p></p>
            </div>
        </div>
    );
}