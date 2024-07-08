import React, { createContext, useState, useEffect } from 'react';
import { fetchImages, fetchVidios } from '../service/api';

export const MediaContext = createContext();
export const MediaProvider = ({ children }) => {
  const [vidios,setvidios]=useState([]);
  const [option, setOption] = useState("home");
  const [data, setData] = useState([]);
  const[likes,setLikes]=useState([]);
  let[query,setQuery]=useState('');
  const [ohis,setohis]=useState([]);
  const fetchAndSetVidios = async () => {
    try {
        if(query===''){
          const result = await fetchVidios();
          if(Array.isArray(result.hits)){
            setvidios([...vidios,...result.hits]);
          }
        }
        else{
          const result = await fetchVidios(query);
            setvidios(result.hits);
        }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };
  const fetchAndSetImages = async () => {
    try {
        if(query===''){
          const result = await fetchImages();
          if(Array.isArray(result.hits)){
            setData([...data,...result.hits]);
          }
        }
        else{
          const result = await fetchImages(query);
            setData(result.hits);
        }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };
 
  useEffect(() => {
    fetchAndSetVidios();
    if (option === 'home') {
      fetchAndSetImages(query);
    }
  },[query]);

  return (
    <MediaContext.Provider value={{ option, setOption, data, fetchAndSetImages,likes,setLikes,setQuery,query,vidios,fetchAndSetVidios,ohis,setohis}}>
      {children}
    </MediaContext.Provider>
  );
};

