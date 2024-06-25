import { useContext } from "react";
import { MediaContext } from "./context/context";
import './style.css';
import Card from "./card";
import Navigation from "./navigationBar";
export default function Content() {
    let { option, data,likes } = useContext(MediaContext);
    return (
        <div className="content">
            <Navigation />
            {option === 'home' && Array.isArray(data) && data.map((img, index) => (
                <Card key={index} data={img} />
            ))}
           {option === 'favorite' && likes.map((img, index) => (
                <Card key={index} data={img} />
            ))}
            {(option !== 'home'&&option !== 'favorite') && (
                <h1>
                    You are in <h3 style={{ color: "red" }} >{option}</h3> section. Sorry! Content for it is not added yet.</h1>
            )}
        </div>
    );
}
