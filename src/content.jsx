import { useContext } from "react";
import { MediaContext } from "./context/context";
import './style.css';
import Card from "./card";

export default function Content() {
    let { option, data,fetchAndSetImages } = useContext(MediaContext);
    fetchAndSetImages();
    return (
        <div className="content">
            {option !== 'home' && (
                <h1>
                    You are in <h3 style={{ color: "red" }} >{option}</h3> section. Sorry! Content for it is not added yet.</h1>
            )}
            {option === 'home' && Array.isArray(data) && data.map((img, index) => (
                <Card key={index} data={img} />
            ))}
        </div>
    );
}
