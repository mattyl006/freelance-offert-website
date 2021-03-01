import React from 'react';
import Media from 'react-media';
import PricingDesktop from "./PricingDesktop";
import PricingMobile from "./PricingMobile";

function Pricing() {

    function matchesHandler(matches) {
        if(matches) {
            return (
                <PricingDesktop />
            );
        } else {
            return(
                <PricingMobile />
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

export default Pricing;