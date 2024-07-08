import React, { useContext } from 'react';
import Content from '../content';
import { MediaContext } from "../context/context";
const Account = () =>{
    const {setOption}=useContext(MediaContext);
    setOption("account_circle");
    return <Content option="account_circle" />
} 

export default Account;