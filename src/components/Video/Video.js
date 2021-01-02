import React from "react";
import './Video.scss';

function Video({url}) {
    return (
        <div className="Video">
            <video className="Video__source" autoPlay loop muted playsInline>
                <source src={url} type="video/mp4"/>
            </video>
        </div>
    );
}

export default Video;
