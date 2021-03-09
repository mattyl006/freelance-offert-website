import React from 'react';
import './Decorate.scss';

import Header from "../../common/Header";



function Decorate({titleView, mobileView, programmerView, designerView, url, alt, id}) {
    if(titleView === true && mobileView === true) {
        return (
            <div className="Decorate" style={{height:'84vh'}} id={id}>
                <img className="Decorate__image" src={url} alt={alt}/>
                <Header/>
            </div>
        );
    } else if(titleView === true && mobileView === false) {
        return (
            <div className="Decorate">
                <img className="Decorate__image" src={url} alt={alt}/>
                <Header/>
            </div>
        );
    } else if(titleView === false && mobileView === true) {
        return (
            <div className="Decorate" id={id} style={{paddingTop: '36px'}}>
                <img className="Decorate__image" src={url} alt={alt}
                     style={{height: '30vh', width: 'auto', maxWidth: '300px'}} />
            </div>
        );
    } else if(programmerView === true) {
        return (
            <div className="Decorate" style={{height: '80%'}}>
                <img className="Decorate__image" src={url} alt={alt}/>
            </div>
        );
    } else if(designerView === true) {
        return (
            <div className="Decorate" style={{height: '90%', marginBottom: '5%'}}>
                <img className="Decorate__image" src={url} alt={alt}/>
            </div>
        );
    } else {
        return (
            <div className="Decorate">
                <img className="Decorate__image" src={url} alt={alt}/>
            </div>
        );
    }
}

export default Decorate;
