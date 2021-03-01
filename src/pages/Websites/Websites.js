import React from 'react';
import Media from 'react-media';
import WebsitesDesktop from "./WebsitesDesktop";
import WebsitesMobile from "./WebsitesMobile";

function Websites() {

    function matchesHandler(matches) {
        if(matches) {
            return (
                <WebsitesDesktop />
            );
        } else {
            return(
                <WebsitesMobile />
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

export default Websites;