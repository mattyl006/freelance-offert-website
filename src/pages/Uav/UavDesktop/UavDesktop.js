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
import MiniContact from "../../../components/common/MiniContact";
import operator from "../../../assets/operator.svg";

function UavDesktop() {

    React.useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [setRefStart, visibleStart] = useOnScreen({rootMargin: '-48px'});
    const [setRefNext, visibleNext] = useOnScreen({rootMargin: '-48px'});

    return (
        <div className="UavDesktop">
            {observerNavigationAlternative("uav", visibleStart, visibleNext)}
            <div className="observer-div" ref={setRefStart}>
                <View>
                    <Decorate uavImages={true} url={operator} url2={uavFlying} alt="Blond ludzik sterujący dronem." alt2={"Latający dron."}/>
                    <Content titleView={false} header={database.uav.header} headerSpan={database.uav.headerSpan}
                             describe={database.uav.paragraph} button={false} link={"/uav"}/>
                </View>
            </div>
            <div className="observer-div" ref={setRefNext}>
                <PackageUav />
                <UsesUav />
                <RealizationsUav src={BMW}/>
                <MiniContact id={"/uav#contact"}/>
            </div>
        </div>
    );
}

export default UavDesktop;