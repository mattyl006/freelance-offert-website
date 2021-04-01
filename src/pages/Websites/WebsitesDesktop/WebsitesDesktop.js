import React from "react";
import './WebsitesDesktop.scss';

import useOnScreen from "../../../functions/useOnScreen";
import observerNavigationAlternative from "../../../functions/observerNavigationAlternative";
import View from "../../../components/sections/View";
import Content from "../../../components/sections/Content";
import Decorate from "../../../components/sections/Decorate";
import MiniContact from "../../../components/common/MiniContact";
import Packages from "../../../components/sections/Packages";
import Stages from "../../../components/sections/Stages/Stages";
import WebsiteOrder from "../../../components/common/WebsiteOrder";

import monitor from "../../../assets/monitor.svg";

import database from "../../../database";

function WebsitesDesktop() {

    const [setRefStart, visibleStart] = useOnScreen({rootMargin: '-48px'});
    const [setRefNext, visibleNext] = useOnScreen({rootMargin: '-48px'});

    React.useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className="WebsitesDesktop">
            {observerNavigationAlternative("websites", visibleStart, visibleNext)}
            <div className="observer-div" ref={setRefStart}>
                <View>
                    <Decorate titleView={false} url={monitor} alt="Monitor wyświetlający przykładową stronę www."/>
                    <Content titleView={false} header={database.website.header} headerSpan={database.website.headerSpan}
                             describe={database.website.more} id={"websites"} button={false}/>
                </View>
            </div>
            <div className="observer-div" ref={setRefNext}>
                <Packages section={"websites"} />
                <Stages />
                <WebsiteOrder  link={"mailto:front.devel06@gmail.com"}/>
                <MiniContact id={"/websites#contact"}/>
            </div>
        </div>
    );
}

export default WebsitesDesktop;