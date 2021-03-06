import React from 'react';
import './HomepageDesktop.scss';

import logo from '../../../assets/main-logo.svg';
import aboutImage from '../../../assets/about.svg';
import monitor from '../../../assets/monitor.svg';
import exampleLogo from '../../../assets/your-logo.svg';
import uavFlying from '../../../assets/uav-flying.svg';
import operator from '../../../assets/operator.svg';

import database from '../../../database.js';

import View from '../../../components/sections/View';
import Decorate from '../../../components/sections/Decorate';
import Content from '../../../components/sections/Content';

import useOnScreen from "../../../functions/useOnScreen";
import observerNavigation from "../../../functions/observerNavigation";
import MiniContact from "../../../components/common/MiniContact";

function HomepageDesktop () {

    const [setRefHome, visibleHome] = useOnScreen({rootMargin: '-48px'});
    const [setRefAbout, visibleAbout] = useOnScreen({rootMargin: '-48px'});
    const [setRefWebsites, visibleWebsites] = useOnScreen({rootMargin: '-48px'});
    const [setRefLogotypes, visibleLogotypes] = useOnScreen({rootMargin: '-48px'});
    const [setRefUav, visibleUav] = useOnScreen({rootMargin: '-48px'});
    const [setRefContact, visibleContact] = useOnScreen({rootMargin: '-48px'});

    React.useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="HomepageDesktop">
            {observerNavigation(false, visibleHome, visibleAbout, visibleWebsites, visibleLogotypes, visibleUav, visibleContact)}
            <div className="observer-div" ref={setRefHome} id="/#home">
                <View>
                    <Decorate titleView={true} mobileView={false} url={logo} alt="Logo G&M. Podkreślony napis G&M w okręgu."/>
                    <Content titleView={true}/>
                </View>
            </div>
            <div className="observer-div" ref={setRefAbout} id="/#about">
                <View>
                    <Content titleView={false} header={database.about.header} headerSpan={database.about.headerSpan}
                             describe={database.about.paragraph} button={true} link={"/about"}/>
                    <Decorate titleView={false} url={aboutImage}
                              alt="Grafiki postaci przedstawiające nasze role,
                              grafik o ciemnych włosach, oraz programista blondyn."/>
                </View>
            </div>
            <div className="observer-div" ref={setRefWebsites} id="/#websites">
                <View>
                    <Decorate titleView={false} url={monitor} alt="Monitor wyświetlający przykładową stronę www."/>
                    <Content titleView={false} header={database.website.header} headerSpan={database.website.headerSpan}
                             describe={database.website.paragraph} button={true} link={"/websites"}/>
                </View>
            </div>
            <div className="observer-div" ref={setRefLogotypes} id="/#logotypes">
                <View>
                    <Content titleView={false} header={database.logotypes.header} headerSpan={database.logotypes.headerSpan}
                             describe={database.logotypes.paragraph} button={true} link={"/logotypes"}/>
                    <Decorate titleView={false} url={exampleLogo} alt="Przykładowe logo zaprojektowane przez Grzegorza."/>
                </View>
            </div>
            <div className="observer-div" ref={setRefUav} id="/#uav">
                <View>
                    <Decorate uavImages={true} url={operator} url2={uavFlying} alt="Blond ludzik sterujący dronem." alt2={"Latający dron."}/>
                    <Content titleView={false} header={database.uav.header} headerSpan={database.uav.headerSpan}
                             describe={database.uav.paragraph} button={true} link={"/uav"}/>
                </View>
            </div>
            <div className="observer-div" ref={setRefContact}>
                <MiniContact id={"/#contact"}/>
            </div>
        </div>
    );
}

export default HomepageDesktop;