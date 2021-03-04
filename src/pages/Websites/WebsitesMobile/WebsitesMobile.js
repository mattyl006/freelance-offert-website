import React from "react";
import './WebsitesMobile.scss';
import Decorate from "../../../components/sections/Decorate";
import monitor from "../../../assets/monitor.svg";
import Content from "../../../components/sections/Content";
import database from "../../../database";
import View from "../../../components/sections/View";
import Packages from "../../../components/sections/Packages";
import Stages from "../../../components/sections/Stages/Stages";
import Banner from "../../../components/common/Banner";
import arrowIcon from "../../../assets/arrow-icon.svg";
import MiniContact from "../../../components/common/MiniContact";
import MobileNav from "../../../components/common/MobileNav";

function WebsitesMobile() {
    return (
        <div className="WebsitesMobile">
            <MobileNav />
            <Decorate titleView={false} mobileView={true} url={monitor} alt="Monitor wyświetlający przykładową stronę www."/>
            <Content titleView={false} header={database.website.header} headerSpan={database.website.headerSpan}
                     describe={database.website.more} id={"websites"} button={false}/>
            <Packages />
            {/*<Stages />*/}
            <Banner url={arrowIcon} alt="Iconka ze strzałką." />
            <MiniContact />
        </div>
    );
}

export default WebsitesMobile;