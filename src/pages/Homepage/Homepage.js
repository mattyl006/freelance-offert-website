import React, {Fragment} from 'react';
import Media from 'react-media';
import HomepageDesktop from "./HomepageDesktop";
import HomepageMobile from "./HomepageMobile";

function Homepage() {

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
        <Fragment>
            <Media query="(min-width: 768px)">
                {matches => {
                    return matchesHandler(matches);
                }}
            </Media>
        </Fragment>
    );
}

export default Homepage;