import React from "react";
import './AboutMobile.scss';

import Content from "../../../components/sections/Content";
import Decorate from "../../../components/sections/Decorate";
import Banner from "../../../components/common/Banner";
import Abilities from "../../../components/sections/Abilities";
import MiniContact from "../../../components/common/MiniContact";
import MobileNav from "../../../components/common/MobileNav";

import aboutImage from "../../../assets/about.svg";
import nerd from "../../../assets/nerd.svg";
import designer from "../../../assets/designer.svg";
import arrowIcon from "../../../assets/arrow-icon.svg";

import database from "../../../database";

function AboutMobile() {

    React.useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="AboutMobile">
            <MobileNav subpage={"about"}/>
            <Decorate titleView={false} mobileView={true} url={aboutImage}
                      alt="Grafiki postaci przedstawiające nasze role,
                              grafik o ciemnych włosach, oraz programista blondyn."/>
            <Content titleView={false} header={database.about.header} headerSpan={database.about.headerSpan}
                     describe={database.about.more} id={"about"} button={false}/>
            <Decorate titleView={false} url={nerd} mobileView={true}
                      alt="Grafika postaci siedzącej przy biurku z komputerem i lampą."/>
            <Content titleView={false} header={database.programmer.header}
                     describe={database.programmer.paragraph} id={"programmer"} button={false}/>
            <Decorate titleView={false} url={designer} mobileView={true}
                      alt="Grafika przedstawiająca artystę stojącego przy X."/>
            <Content titleView={false} header={database.designer.header}
                     describe={database.designer.paragraph} id={"programmer"} button={false}/>
            <Abilities />
            <MiniContact id={"/about#contact"}/>
        </div>
    );
}

export default AboutMobile;