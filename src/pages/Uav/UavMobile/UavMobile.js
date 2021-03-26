import React from "react";
import './UavMobile.scss';

import database from "../../../database";

import arrowIcon from "../../../assets/arrow-icon.svg";
import uavFlying from "../../../assets/uav-flying.svg";

import MobileNav from "../../../components/common/MobileNav";
import Decorate from "../../../components/sections/Decorate";
import Content from "../../../components/sections/Content";
import Banner from "../../../components/common/Banner";
import MobileFooter from "../../../components/common/MobileFooter/MobileFooter";
import UsesUav from "../../../components/sections/UsesUav";
import RealizationsUav from "../../../components/sections/RealizationsUav";
import PackageUav from "../../../components/sections/PackageUav";

function UavMobile() {
    return (
        <div className="UavMobile">
            <MobileNav subpage={true}/>
            <Decorate titleView={false} mobileView={true} url={uavFlying} alt="Blond ludzik latający dronem." id={"uav"}/>
            <Content titleView={false} header={database.uav.header} button={false}
                     headerSpan={database.uav.headerSpan}
                     describe={database.uav.more}/>
            <PackageUav />
            <UsesUav />
            <RealizationsUav />
            <Banner url={arrowIcon} alt="Iconka ze strzałką." link={"/freelance-offert-website/pricing"} />
            <MobileFooter />
        </div>
    );
}

export default UavMobile;