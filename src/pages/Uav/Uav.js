import React from 'react';
import Media from 'react-media';
import UavDesktop from "./UavDesktop";
import UavMobile from "./UavMobile";

function Uav() {

    function matchesHandler(matches) {
        if(matches) {
            return (
                <UavDesktop />
            );
        } else {
            return(
                <UavMobile />
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

export default Uav;