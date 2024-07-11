import { useState } from "react";
import { useContext } from "react";
import { MediaContext } from "./context/context";
import Vidio from "./Vidio";
export default function Card({data,flag}){
    let[liked,setLiked]=useState({
        likes:data.likes,
        isliked:flag
    });
    let [follow,setfollow]=useState(false);
    let { likes, setLikes,followings,setFollowings} = useContext(MediaContext);
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
let handlefollow = () => {
    if (follow) {
        setFollowings(followings.filter(f => f.id !== data.user_id));
        setfollow(false);
    } else {
        const isFollowing = followings.some(f => f.id === data.user_id);
        if (!isFollowing) {
            setFollowings([...followings, {
                id: data.user_id,
                img: data.userImageURL,
                name: data.user
            }]);
        }
        setfollow(true);
    }
};

    return (
         <div className="card">
            <div className="cardh">
             <img src={data.userImageURL}/>
             <h4>{data.user}</h4>
             <div className={follow?"following":"follow"} onClick={handlefollow}><p>{follow?"following":"follow"}{follow?<i class="fa-solid fa-check"></i>:<i class="fa-solid fa-user-plus"></i>}</p></div>
            </div>
            <div className="cardd">
            {data.tags}
            </div>
            <div className="cardm" onDoubleClick={handlelike}>{data.type==='film'?<Vidio src={data.videos.medium.url}poster={data.videos.medium.thumbnail}/>:<img className="post" src={data.largeImageURL} />}</div>
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