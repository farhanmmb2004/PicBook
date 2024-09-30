import React, { createContext, useState, useEffect } from 'react';
import { fetchImages, fetchVidios } from '../service/api';

export const MediaContext = createContext();
export const MediaProvider = ({ children }) => {
  const [vidios,setvidios]=useState([]);
  const[loading,setLoading]=useState(false);
  const [option, setOption] = useState("home");
  const[followings,setFollowings]=useState([]);
  const [data, setData] = useState([]);
  const[likes,setLikes]=useState([]);
  const[ohis,setohis]=useState([]);
  let[query,setQuery]=useState('');
  const fetchAndSetVidios = async () => {
    try {
      setLoading(true);
          const result = await fetchVidios();
          if(Array.isArray(result.hits)){
            setvidios([...vidios,...result.hits]);
            setLoading(false);
          }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };
  const fetchAndSetImages = async () => {
    try {
      setLoading(true);
        let result = await fetchImages();
        if(Array.isArray(result.hits)){
            setData([...data,...result.hits]);
            setLoading(false);
          }

        }
         catch (error) {
      console.error("Error fetching images:", error);
    }
  };
 
  useEffect(() => {
    fetchAndSetVidios();
    if(option==='home'){
      fetchAndSetImages();
    }
    if(query!==''){
      fetchAndSetImages(query);
    }
  },[]);

  return (
    <MediaContext.Provider value={{ option, setOption, data, fetchAndSetImages,likes,setLikes,setQuery,query,vidios,fetchAndSetVidios,ohis,setohis,followings,setFollowings,loading}}>
      {children}
    </MediaContext.Provider>
  );
};

