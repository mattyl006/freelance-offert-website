import React from 'react';
import Media from 'react-media';
import AboutDesktop from "./AboutDesktop";
import AboutMobile from "./AboutMobile";

function About() {

    function matchesHandler(matches) {
        if(matches) {
            return (
                <AboutDesktop />
            );
        } else {
            return(
                <AboutMobile />
            );
        }
    }

    return (
        <div className="App">
            <Media query="(min-width: 768px)">
                {matches => {
                    return matchesHandler(matches);
                }}
            </Media>
        </div>
    );
}

export default About;