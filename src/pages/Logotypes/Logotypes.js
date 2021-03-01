import React from 'react';
import Media from 'react-media';
import LogotypesDesktop from "./LogotypesDesktop";
import LogotypesMobile from "./LogotypesMobile";

function Logotypes() {

    function matchesHandler(matches) {
        if(matches) {
            return (
                <LogotypesDesktop />
            );
        } else {
            return(
                <LogotypesMobile />
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

export default Logotypes;