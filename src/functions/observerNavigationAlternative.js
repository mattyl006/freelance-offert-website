import React from "react";
import Navigation from "../components/common/Navigation";
import miniLogo from "../assets/mini-logo.svg";

function observerNavigationAlternative(visibleStartSection) {

    const darkColor = '#171820';
    const lightColor = '#D7D7D7';
    const darkColorBackground = 'rgba(23, 24, 32, 0.8)';
    const lightColorBackground = 'rgba(215, 215, 215, 0.8)';

    if(!visibleStartSection) {
        // return ("lewa ciemna, prawa ciemna, napisy jasne");
        return (
            <Navigation logo={miniLogo}
                        leftBackgroundColor={darkColorBackground} rightBackgroundColor={darkColorBackground} linkColor={lightColor}/>
        );
    } else if(visibleStartSection === "pricing") {
        // return ("lewa ciemna, prawa jasna, napisy ciemne");
        return (
            <Navigation logo={miniLogo}
                        leftBackgroundColor={darkColorBackground} rightBackgroundColor={lightColorBackground} linkColor={darkColor}/>
        );
    } else {
        // startowy przypadek
        // return ("lewa jasna, prawa ciemna, napisy jasne");
        return (
            <Navigation logo={miniLogo}
                        leftBackgroundColor={lightColorBackground} rightBackgroundColor={darkColorBackground} linkColor={lightColor}/>
        );
    }
}

export default observerNavigationAlternative;