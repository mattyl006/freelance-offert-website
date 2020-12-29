import React from 'react';
import './Decorate.scss';
import Header from "./Header";

// backgroundAttachment: 'fixed'

function Decorate({titleView, url}) {
    return (
        <div className="Decorate">
            {
                (titleView === true) ?
                    <div className="Decorate__container">
                        <img className="Decorate__logo" src={url} alt="logo G&M"/>
                        <Header/>
                    </div>
                    :
                    <div className="Decorate__container">
                        <img className="Decorate__image" src={url} alt="znak równowagi"/>
                    </div>
            }
        </div>
    );
}

export default Decorate;
