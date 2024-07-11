import { useContext,useEffect } from 'react';
import React from 'react';
import Content from '../content';
import { MediaContext } from "../context/context";
const Videocam = () => {
    const {setOption}=useContext(MediaContext);
    useEffect(() => {
        setOption("videocam");
    }, [setOption]);
    return<Content option="videocam" />;}

export default Videocam;