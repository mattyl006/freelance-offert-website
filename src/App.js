import './App.scss';
import React from 'react';
import Media from 'react-media';
import HomepageDesktop from "./pages/desktop/HomepageDesktop";
import HomepageMobile from "./pages/mobile/HomepageMobile";

function App() {

    function matchesHandler(matches) {
        if(matches) {
            return (
                <HomepageDesktop />
            );
        } else {
            return(
                <HomepageMobile />
            );
        }
    }

    return (
    <div className="App">
        <Media query="(min-width: 1200px)">
            {matches => {
                return matchesHandler(matches);
            }}
        </Media>
    </div>
    );
}

export default App;
