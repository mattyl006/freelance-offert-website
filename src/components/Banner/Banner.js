import React from "react";
import './Banner.scss';

function Banner({url, alt}) {
    return (
        <div className="Banner">
            <p className="Banner__paragraph">
                MYŚLISZ O WYCENIE?
                U NAS MASZ JĄ
                ZA DARMO!
            </p>
            <img className="Banner__image" alt={alt} src={url}/>
            <p className="Banner__paragraph">
                JESTEŚMY OTWARCI NA
                WSZELKĄ WSPÓŁPRACĘ
                ZWIĄZANE Z NASZĄ
                BRANŻĄ
            </p>
        </div>
    );
}

export default Banner;
