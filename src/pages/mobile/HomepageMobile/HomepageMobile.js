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
            <Decorate titleView={true} url={logo} alt={"Logo tytułowe G&M"} />
            <Content titleView={false} header={database.about.header}
                     headerSpan={database.about.headerSpan} describe={database.about.paragraph} id={"about"}/>
        </div>
    );
}

export default HomepageMobile;