import React from "react";
import { useContext,useMemo,useState,useEffect } from 'react';
import { MediaContext } from "../context/context";
import Card from "../card";
import { fetchImages,fetchVidios } from "../service/api";
export default function Search(){
    const [searchData, setSearchData] = useState([]);
    const {query,option,setOption}=useContext(MediaContext);
    const [option1,setOption1]=useState(option);
    const[max,setMax]=useState(1);
    const fetchAndSetImages = async () => {
           if(option1==='home'){
            let result = await fetchImages(query);
                setSearchData([...result.hits]);
           }
           else if(option1==='videocam'){
            let result = await fetchVidios(query);
            console.log(result);
                setSearchData([...result.hits]);
           }
      };
      const loadmore = async () => {
        if(option1==='home'){
            let result = await fetchImages(query);
            setSearchData([...searchData,...result.hits]);
        }
        else if(option1==='videocam'){
            let result = await fetchVidios(query);
            setSearchData([...searchData,...result.hits]);
        }
  };
     
      useEffect(() => {
        setOption('search');
        fetchAndSetImages();
      },[query]);
    return(
        <div className="content">
        {searchData.map((img, index) => <Card key={index} data={{...img,flag:false}}  />)}
        <div className="helperb"><button onClick={loadmore} className="content-button">load more</button></div>
      
        </div>
    );
}