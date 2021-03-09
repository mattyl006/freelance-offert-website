import React from "react";
import './HomepageMobile.scss';

import logo from '../../../assets/main-logo.svg';
import aboutImage from '../../../assets/about.svg';
import monitor from '../../../assets/monitor.svg';
import exampleLogo from '../../../assets/your-logo.svg';
import uavFlying from '../../../assets/uav-flying.svg';
import arrowIcon from '../../../assets/arrow-icon.svg';

import database from '../../../database.js';

import Decorate from '../../../components/sections/Decorate';
import Content from '../../../components/sections/Content';
import Banner from "../../../components/common/Banner";
import MobileNav from "../../../components/common/MobileNav";
import MobileFooter from "../../../components/common/MobileFooter/MobileFooter";

function HomepageMobile() {

    React.useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="HomepageMobile">
            <MobileNav />
            <Decorate titleView={true} mobileView={true} url={logo} alt="Logo G&M. Podkreślony napis G&M w okręgu." />
            <Banner url={arrowIcon} alt="Iconka ze strzałką." />
            <Decorate url={aboutImage} titleView={false} mobileView={true} alt="Grafiki postaci przedstawiające nasze role,
              grafik o ciemnych włosach, oraz programista blondyn." id={"about"}/>
            <Content titleView={false} header={database.about.header} button={true} link={"/freelance-offert-website/about"}
                     headerSpan={database.about.headerSpan} describe={database.about.paragraph}/>
            <Decorate titleView={false} mobileView={true} url={monitor}
                      alt="Monitor wyświetlający przykładową stronę www." id={"websites"}/>
            <Content titleView={false} header={database.website.header} button={true} link={"/freelance-offert-website/websites"}
                     headerSpan={database.website.headerSpan} describe={database.website.paragraph}/>
            <Decorate titleView={false} mobileView={true} url={exampleLogo}
                      alt="Przykładowe logo zaprojektowane przez Grzegorza." id={"logotypes"}/>
            <Content titleView={false} header={database.logotypes.header} button={true} link={"/freelance-offert-website/logotypes"}
                     headerSpan={database.logotypes.headerSpan}
                     describe={database.logotypes.paragraph}/>
            <Decorate titleView={false} mobileView={true} url={uavFlying} alt="Blond ludzik latający dronem." id={"uav"}/>
            <Content titleView={false} header={database.uav.header} button={true} link={"/freelance-offert-website/uav"}
                     headerSpan={database.uav.headerSpan} describe={database.uav.paragraph}/>
            <MobileFooter />
        </div>
    );
}

export default HomepageMobile;