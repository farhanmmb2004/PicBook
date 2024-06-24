// ThemeContext.js
// import React, { createContext, useState } from 'react';
// import { fetchImages } from '../service/api';

// export const MediaContext = createContext();

// export const MediaProvider = ({ children }) => {
//   const [option, setOption] = useState("home");
//   // let[query,setQuery]=useState("random");
//   let[data,setData]=useState([]);
//   let images=()=>{
//   let result=fetchImages();
//   setData(result);
//   }
// return (
//     <MediaContext.Provider value={{option, setOption,data,images}}>
//       {children}
//     </MediaContext.Provider>
//   );
// };
// // export {MediaContext,MediaProvider}
import React, { createContext, useState, useEffect } from 'react';
import { fetchImages } from '../service/api';

export const MediaContext = createContext();

export const MediaProvider = ({ children }) => {
  const [option, setOption] = useState("home");
  const [data, setData] = useState([]);

  // Function to fetch images and set data
  const fetchAndSetImages = async () => {
    try {
      const result = await fetchImages();
      setData(result.hits); // Assuming the API response has a 'hits' array with images
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    if (option === 'home') {
      fetchAndSetImages();
    }
  }, [option]);

  return (
    <MediaContext.Provider value={{ option, setOption, data, fetchAndSetImages }}>
      {children}
    </MediaContext.Provider>
  );
};

