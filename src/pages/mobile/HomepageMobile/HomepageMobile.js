import React from "react";
import './HomepageMobile.scss';

import logo from './../../../assets/main-logo.svg';
import aboutImage from './../../../assets/about.svg';
import monitor from './../../../assets/monitor.svg';
import exampleLogo from './../../../assets/your-logo.svg';
import uavFlying from './../../../assets/uav-flying.svg';
import arrowIcon from './../../../assets/arrow-icon.svg';

import database from './../../../database.js';

import View from '../../../components/sections/View';
import Decorate from '../../../components/sections/Decorate';
import Content from '../../../components/sections/Content';
import Contact from "../../../components/sections/Contact";
import Banner from "../../../components/common/Banner";

function HomepageMobile() {
    return (
        <div className="HomepageMobile">
            <Decorate titleView={true} mobileView={true} url={logo} alt="Logo G&M. Podkreślony napis G&M w okręgu." />
            <Content titleView={false} header={database.about.header}
                     headerSpan={database.about.headerSpan} describe={database.about.paragraph} id={"about"}/>
            <Decorate url={aboutImage} mobileView={true} alt="Grafiki postaci przedstawiające nasze role,
              grafik o ciemnych włosach, oraz programista blondyn." />
            <Content titleView={false} header={database.website.header}
                     headerSpan={database.website.headerSpan} describe={database.website.paragraph} id={"websites"}/>
            <Decorate titleView={false} mobileView={true} url={monitor}
                      alt="Monitor wyświetlający przykładową stronę www."/>
            <Content titleView={false} header={database.logotypes.header}
                     headerSpan={database.logotypes.headerSpan} describe={database.logotypes.paragraph} id={"logotypes"}/>
            <Decorate titleView={false} mobileView={true} url={exampleLogo} alt="Przykładowe logo zaprojektowane przez Grzegorza."/>
            <Content titleView={false} header={database.uav.header}
                     headerSpan={database.uav.headerSpan} describe={database.uav.paragraph} id={"uav"}/>
            <Decorate titleView={false} mobileView={true} url={uavFlying} alt="Blond ludzik latający dronem."/>
        </div>
    );
}

export default HomepageMobile;