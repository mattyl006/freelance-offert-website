import React from "react";
import './HomepageMobile.scss';

import logo from '../../../assets/main-logo.svg';
import aboutImage from '../../../assets/about.svg';
import monitor from '../../../assets/monitor.svg';
import exampleLogo from '../../../assets/your-logo.svg';
import uavFlying from '../../../assets/uav-flying.svg';

import database from '../../../database.js';

import Decorate from '../../../components/sections/Decorate';
import Content from '../../../components/sections/Content';
import MobileNav from "../../../components/common/MobileNav";
import MiniContact from "../../../components/common/MiniContact";
import Slider from "../../../components/common/Slider";
import operator from "../../../assets/operator.svg";

function HomepageMobile() {

    React.useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="HomepageMobile">
            <MobileNav subpage={false}/>
            <Decorate titleView={true} mobileView={true} url={logo} alt="Logo G&M. Podkreślony napis G&M w okręgu." />
            <div className="HomepageMobile__Slider-container">
                <Slider />
            </div>
            <Decorate url={aboutImage} titleView={false} mobileView={true} alt="Grafiki postaci przedstawiające nasze role,
              grafik o ciemnych włosach, oraz programista blondyn." id={"/#about"}/>
            <Content titleView={false} header={database.about.header} button={true} link={"/about"}
                     headerSpan={database.about.headerSpan} describe={database.about.paragraph}/>
            <Decorate titleView={false} mobileView={true} url={monitor}
                      alt="Monitor wyświetlający przykładową stronę www." id={"/#websites"}/>
            <Content titleView={false} header={database.website.header} button={true} link={"/websites"}
                     headerSpan={database.website.headerSpan} describe={database.website.paragraph}/>
            <Decorate titleView={false} mobileView={true} url={exampleLogo}
                      alt="Przykładowe logo zaprojektowane przez Grzegorza." id={"/#logotypes"}/>
            <Content titleView={false} header={database.logotypes.header} button={true} link={"/logotypes"}
                     headerSpan={database.logotypes.headerSpan}
                     describe={database.logotypes.paragraph}/>
            <Decorate uavImages={true} url={operator} url2={uavFlying} alt="Blond ludzik sterujący dronem." alt2={"Latający dron."} id="/#uav"/>
            <Content titleView={false} header={database.uav.header} button={true} link={"/uav"}
                     headerSpan={database.uav.headerSpan} describe={database.uav.paragraph}/>
            <MiniContact id={"/#contact"}/>
        </div>
    );
}

export default HomepageMobile;