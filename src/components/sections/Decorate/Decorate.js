import React from 'react';
import './Decorate.scss';

import Header from "../../common/Header";



function Decorate({titleView, mobileView, url, alt}) {
    if(titleView === true && mobileView === true) {
        return (
            <div className="Decorate" style={{height:'84vh'}}>
                <img className="Decorate__image" src={url} alt={alt}/>
                <Header/>
            </div>
        );
    } else if(titleView === true && mobileView !== true) {
        return (
            <div className="Decorate" >
                <img className="Decorate__image" src={url} alt={alt}/>
                <Header/>
            </div>
        );
    } else if(mobileView === true && titleView !== true) {
        return (
            <div className="Decorate" >
                <img className="Decorate__image" src={url} alt={alt}
                     style={{height: '30vh', width: 'auto', maxWidth: '300px', marginTop: '8vh'}} />
            </div>
        );
    } else {
        return (
            <div className="Decorate" >
                <img className="Decorate__image" src={url} alt={alt}/>
            </div>
        );
    }
}

export default Decorate;
