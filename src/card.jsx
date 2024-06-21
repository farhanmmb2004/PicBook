import { useState } from "react";
export default function Card({option}){
    let[liked,setLiked]=useState(false);
    return (
        <div className="card">
            <div className="cardh">
             <img src="https://scontent.fknu1-6.fna.fbcdn.net/v/t39.30808-6/313431767_1183729485914178_5770584271180361960_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rkrl3bzGY4oQ7kNvgEbvO3W&_nc_ht=scontent.fknu1-6.fna&oh=00_AYBARCy1dMTiULClPNNaKznKHATlyqXIAqy4_XvXK4Lxqg&oe=667B27B5"/>
             <h4>farhankhanmmb2004</h4>
            </div>
            <div className="cardd">
            picture of the most handsome guy ever born after musah alihis salam
            </div>
            <div className="cardm"> <img className="post" src="https://scontent.fknu1-1.fna.fbcdn.net/v/t39.30808-6/362281545_109945638840997_747961532145233352_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CBTeDWMPPXoQ7kNvgFDtkOS&_nc_ht=scontent.fknu1-1.fna&oh=00_AYAMoSg4rmZ-0566-EsqzUoIKAEP6zgTh-L1jxaD9jG6LQ&oe=667B3BFF" />  </div>
            <div className="cardf">
            <div className="helper">
            <span onClick={()=>{setLiked(!liked)}} class="material-symbols-outlined like" style={liked?{backgroundColor:"blue"}:{backgroundColor:""}}>
            thumb_up
            </span>1 trillion+ likes
            <span class="material-symbols-outlined comment">
            mode_comment 
            </span> <p>1 million comments</p>
            </div>
            <p>shariq_hussain,rehan_wais and 1 trillion other liked...</p>
            </div>
        </div>
    );
}