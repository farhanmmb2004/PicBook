import React, { useState, useRef } from 'react';
import './style.css';
const Vidio = ({ src, poster }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handlePlayPause = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
        setIsPlaying(!videoRef.current.paused);
    };

    return (
        <div className="video-wrapper" onClick={handlePlayPause}>
            <video
                ref={videoRef}
                src={src}
                poster={poster}
                className="styled-video"
                controls={false}
            >
                Your browser does not support the video tag.
            </video>
            {!isPlaying && <div className="video-overlay">Click to Play</div>}
        </div>
    );
};

export default Vidio;
