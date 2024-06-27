import React, { useContext, useMemo } from "react";
import { MediaContext } from "./context/context";
import './style.css';
import Card from "./card";

export default function Content({ option }) {
  const { data, likes } = useContext(MediaContext);

  const homeContent = useMemo(() => (
    Array.isArray(data) ? data.map((img, index) => <Card key={index} data={img} />) : null
  ), [data]);

  const favoriteContent = useMemo(() => (
    likes.map((img, index) => <Card key={index} data={img} />)
  ), [data]);

  return (
    <div className="content">
      {option === 'home' && homeContent}
      {option === 'favorite' && favoriteContent}
      {(option !== 'home' && option !== 'favorite') && (
        <h1>
          You are in <h3 style={{ color: "red" }}>{option}</h3> section. Sorry! Content for it is not added yet.
        </h1>
      )}
    </div>
  );
}
