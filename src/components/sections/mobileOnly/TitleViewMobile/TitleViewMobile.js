import React from 'react';
import './TitleViewMobile.scss';
import Header from "../../../common/Header";

function TitleViewMobile({logo}) {
    return (
        <div className="TitleViewMobile">
            <img className="TitleViewMobile__image" src={logo}/>
            <Header />
        </div>
    );
}

export default TitleViewMobile;