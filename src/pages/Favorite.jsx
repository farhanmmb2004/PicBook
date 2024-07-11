import { useContext,useEffect } from 'react';
import React from 'react';
import Content from '../content';
import { MediaContext } from "../context/context";
const Favorite = () => {
    const {setOption}=useContext(MediaContext);
    useEffect(() => {
        setOption("favorite");
    }, [setOption]);
    return <Content option="favorite" />;
}

export default Favorite;