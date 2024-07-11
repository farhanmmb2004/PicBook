import React, { useContext,useEffect } from 'react';
import Content from '../content';
import { MediaContext } from "../context/context";
const Account = () =>{
    const {setOption}=useContext(MediaContext);
    useEffect(() => {
        setOption("account_circle");
    }, [setOption]);
    return <Content option="account_circle" />
} 

export default Account;