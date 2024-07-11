import { useContext,useEffect } from 'react';
import React from 'react';
import Content from '../content';
import { MediaContext } from "../context/context";
const Favorite = () => {
    const {setOption,likes}=useContext(MediaContext);
    useEffect(() => {
        setOption("favorite");
    }, [setOption]);
    return (<div>
        {likes.length===0?<h1>you did not liked nothing yet</h1>:<Content option="favorite" />}
    </div>
    )
}

export default Favorite;