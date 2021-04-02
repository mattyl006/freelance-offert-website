import React from "react";
import './UavMobile.scss';

import database from "../../../database";

import uavFlying from "../../../assets/uav-flying.svg";
import BMW from "../../../assets/BMW.mp4";

import MobileNav from "../../../components/common/MobileNav";
import Decorate from "../../../components/sections/Decorate";
import Content from "../../../components/sections/Content";
import UsesUav from "../../../components/sections/UsesUav";
import RealizationsUav from "../../../components/sections/RealizationsUav";
import PackageUav from "../../../components/sections/PackageUav";
import MiniContact from "../../../components/common/MiniContact";
import operator from "../../../assets/operator.svg";
import View from "../../../components/sections/View";

function UavMobile() {


    React.useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="UavMobile">
            <MobileNav subpage={"uav"}/>
            <Decorate uavImages={true} url={operator} url2={uavFlying} alt="Blond ludzik sterujący dronem." alt2={"Latający dron."}/>
            <Content titleView={false} header={database.uav.header} button={false}
                     headerSpan={database.uav.headerSpan}
                     describe={database.uav.more}/>
            <PackageUav />
            <UsesUav />
            <RealizationsUav src={BMW}/>
            <MiniContact id={"/uav#contact"}/>
        </div>
    );
}

export default UavMobile;