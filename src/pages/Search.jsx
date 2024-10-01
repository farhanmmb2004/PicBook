import React from "react";
import { useContext,useMemo,useState,useEffect } from 'react';
import { MediaContext } from "../context/context";
import Card from "../card";
import { fetchImages,fetchVidios } from "../service/api";
import MyLoader from "../MyLoader";
export default function Search(){
    const [searchData, setSearchData] = useState([]);
    const {query,option,setOption}=useContext(MediaContext);
    let[loading,setLoading]=useState(false);
    const [option1,setOption1]=useState(option);
    const[max,setMax]=useState(1);
    const fetchAndSetImages = async () => {
        setLoading(true);
           if(option1==='home'){
            let result = await fetchImages(query);
                setSearchData([...result.hits]);
                setLoading(false);
           }
           else if(option1==='videocam'){
            let result = await fetchVidios(query);
                setSearchData([...result.hits]);
                setLoading(false);
           }
      };
      const loadmore = async () => {
        setLoading(true);
        if(option1==='home'){
            let result = await fetchImages(query);
            setSearchData([...searchData,...result.hits]);
            setLoading(false);
        }
        else if(option1==='videocam'){
            let result = await fetchVidios(query);
            setSearchData([...searchData,...result.hits]);
            setLoading(false);
        }
  };
     
      useEffect(() => {
        setOption('search');
        fetchAndSetImages();
      },[query]);
    return(
        <div className="content">
        {searchData.map((img, index) => <Card key={index} data={{...img,flag:false}}  />)}
        {loading&&<MyLoader/>}
        <div className="helperb"><button onClick={loadmore} className="content-button">load more</button></div>
      
        </div>
    );
}