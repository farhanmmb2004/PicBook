import { useContext,useEffect } from 'react';
import React from 'react';
import Content from '../content';
import { MediaContext } from "../context/context";
const Home = () => {
    const {setOption}=useContext(MediaContext);
    useEffect(() => {
        setOption("home");
    }, [setOption]);
    return <Content option="home" />
};

export default Home;