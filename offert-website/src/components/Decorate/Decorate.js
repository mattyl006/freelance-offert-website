import React from 'react';
import './Decorate.scss';
import Header from "./Header";

function Decorate({titleView, url}) {
    return (
        <div className="Decorate">
            {
                ({titleView}) ?
                    <div className="Decorate__container">
                        <img className="Decorate__logo" src={url} alt="logo G&M"/>
                        <Header/>
                    </div>
                    :
                    <div className="Decorate__background">
                        &nbsp;
                    </div>
            }
        </div>
    );
}

export default Decorate;
