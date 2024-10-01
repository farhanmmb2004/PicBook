import React, { useContext, useMemo, useState } from "react";
import { MediaContext } from "./context/context";
import './style.css';
import Card from "./card";
import MyLoader from "./MyLoader";
import {  trackWindowScroll }
  from 'react-lazy-load-image-component';
function Content({ option }) {
  const { loading,data, likes,fetchAndSetImages,vidios,fetchAndSetVidios,followings} = useContext(MediaContext);
  const homeContent = useMemo(() => (
    Array.isArray(data) ? data.map((img, index) => <Card key={index} data={{...img,flag:false}}  />) : null
  )
  , [data]);
  const loader=<MyLoader/>
  const vidioContent = useMemo(() => (
    Array.isArray(vidios) ? vidios.map((img, index) => <Card key={index} data={{...img,flag:false}}  />) : null
  )
  , [vidios]);
  const favoriteContent = useMemo(() => (
    likes.map((img, index) => <Card key={index} data={{...img}} flag={true} />)
  ), [data]);
  const handleButtonClick = () => {
    if(option==='home'){
      fetchAndSetImages();
      console.log(followings);
    }
    else{
      fetchAndSetVidios();
    }
  };

  return (
    <div className="content">
      {option === 'home' && <>{homeContent}
      {loading&&loader}
      <div className="helperb"><button onClick={handleButtonClick} className="content-button">load more</button></div>
      </> }
      {option === 'favorite' && favoriteContent}
      {option==='videocam'&&<>{vidioContent}
      {loading&&loader}
      <div className="helperb"><button onClick={handleButtonClick} className="content-button">load more</button></div>
      
      </>}
      {(option === 'account_circle') && (
        <h1>
          You are in <h3 style={{ color: "red" }}>{option}</h3> section. Sorry! Content for it is not added yet.
        </h1>
        
      )}
    </div>
  );
}
export default trackWindowScroll(Content);