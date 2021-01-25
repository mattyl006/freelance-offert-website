import React from "react";
import Navigation from "./../../../components/Navigation";
import miniLogo from "./../../../assets/mini-logo.svg";

function observerNavigation(visibleHome, visibleAbout, visibleWebsites, visibleLogotypes, visibleUav, visibleContact) {

    const darkColor = '#171820';
    const lightColor = '#D7D7D7';
    const darkColorBackground = 'rgba(23, 24, 32, 0.8)';
    const lightColorBackground = 'rgba(215, 215, 215, 0.8)';

    if(!visibleHome && visibleAbout) {
        // return ("lewa ciemna, prawa jasna, napisy ciemne");
        return (
            <Navigation logo={miniLogo}
                        leftBackgroundColor={darkColorBackground} rightBackgroundColor={lightColorBackground} linkColor={darkColor}/>
        );
    }
    if(!visibleAbout && visibleWebsites) {
        // return ("lewa jasna, prawa ciemna, napisy jasne");
        return (
            <Navigation logo={miniLogo}
                        leftBackgroundColor={lightColorBackground} rightBackgroundColor={darkColorBackground} linkColor={lightColor}/>
        );
    }
    if(!visibleWebsites && visibleLogotypes) {
        // return ("lewa ciemna, prawa jasna, napisy ciemne");
        return (
            <Navigation logo={miniLogo}
                        leftBackgroundColor={darkColorBackground} rightBackgroundColor={lightColorBackground} linkColor={darkColor}/>
        );
    }
    if(!visibleLogotypes && visibleUav) {
        // return ("lewa jasna, prawa ciemna, napisy jasne");
        return (
            <Navigation logo={miniLogo}
                        leftBackgroundColor={lightColorBackground} rightBackgroundColor={darkColorBackground} linkColor={lightColor}/>
        );
    }
    if(!visibleUav && visibleContact) {
        // return ("lewa ciemna, prawa ciemna, napisy jasne");
        return (
            <Navigation logo={miniLogo}
                        leftBackgroundColor={lightColorBackground} rightBackgroundColor={lightColorBackground} linkColor={darkColor}/>
        );
    }
    // return ("startowy przypadek");
    return (
        <Navigation logo={miniLogo}
                    leftBackgroundColor={lightColorBackground} rightBackgroundColor={darkColorBackground} linkColor={lightColor}/>
    );
}

export default observerNavigation;