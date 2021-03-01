import React from "react";
import './AboutDesktop.scss';
import useOnScreen from "../../../functions/useOnScreen";
import observerNavigation from "../../../functions/observerNavigation";

function AboutDesktop() {

    const [setRefHome, visibleHome] = useOnScreen({rootMargin: '-48px'});
    const [setRefAbout, visibleAbout] = useOnScreen({rootMargin: '-48px'});
    const [setRefWebsites, visibleWebsites] = useOnScreen({rootMargin: '-48px'});
    const [setRefLogotypes, visibleLogotypes] = useOnScreen({rootMargin: '-48px'});
    const [setRefUav, visibleUav] = useOnScreen({rootMargin: '-48px'});
    const [setRefContact, visibleContact] = useOnScreen({rootMargin: '-48px'});

    return (
        <div className="AboutDesktop">
            {observerNavigation(visibleHome, visibleAbout, visibleWebsites, visibleLogotypes, visibleUav, visibleContact)}

        </div>
    );
}

export default AboutDesktop;