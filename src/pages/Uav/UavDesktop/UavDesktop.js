import React from "react";
import './UavtDesktop.scss';
import observerNavigationAlternative from "../../../functions/observerNavigationAlternative";
import useOnScreen from "../../../functions/useOnScreen";
import Decorate from "../../../components/sections/Decorate";
import uavFlying from "../../../assets/uav-flying.svg";
import Content from "../../../components/sections/Content";
import database from "../../../database";
import View from "../../../components/sections/View";
import PackageUav from "../../../components/sections/PackageUav";
import UsesUav from "../../../components/sections/UsesUav";
import RealizationsUav from "../../../components/sections/RealizationsUav";
import BMW from "../../../assets/BMW.mp4";
import Banner from "../../../components/common/Banner";
import arrowIcon from "../../../assets/arrow-icon.svg";
import Footer from "../../../components/common/Footer";

function UavDesktop() {

    const [setRefStart, visibleStart] = useOnScreen({rootMargin: '-48px'});
    const [setRefNext, visibleNext] = useOnScreen({rootMargin: '-48px'});

    return (
        <div className="UavDesktop">
            {observerNavigationAlternative(true, visibleStart, visibleNext)}
            <div className="observer-div" ref={setRefStart}>
                <View>
                    <Decorate titleView={false} url={uavFlying} alt="Blond ludzik latający dronem." id="uav"/>
                    <Content titleView={false} header={database.uav.header} headerSpan={database.uav.headerSpan}
                             describe={database.uav.paragraph} button={true} link={"/uav"}/>
                </View>
            </div>
            <div className="observer-div" ref={setRefNext}>
                <PackageUav />
                <UsesUav />
                <RealizationsUav src={BMW}/>
                <Banner url={arrowIcon} alt="Iconka ze strzałką." link={"/pricing"}/>
                <Footer />
            </div>
        </div>
    );
}

export default UavDesktop;