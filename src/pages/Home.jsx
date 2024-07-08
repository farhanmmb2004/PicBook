import { useContext } from 'react';
import React from 'react';
import Content from '../content';
import { MediaContext } from "../context/context";
const Home = () => {
    const {setOption}=useContext(MediaContext);
    setOption("home");
    return <Content option="home" />
};

export default Home;