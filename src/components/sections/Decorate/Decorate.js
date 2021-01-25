import React from 'react';

import './Decorate.scss';

import Header from "../../common/Header";

function Decorate({titleView, url, alt}) {
    return (
        <div className="Decorate">
            {
                (titleView === true) ?
                    <div className="Decorate__container">
                        <img className="Decorate__image" src={url} alt={alt}/>
                        <Header/>
                    </div>
                    :
                    <div className="Decorate__container">
                        <img className="Decorate__image" src={url} alt={alt}/>
                    </div>
            }
        </div>
    );
}

export default Decorate;
