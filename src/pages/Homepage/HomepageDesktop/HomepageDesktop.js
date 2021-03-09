import React, {Fragment} from 'react';
import './HomepageDesktop.scss';

import logo from '../../../assets/main-logo.svg';
import aboutImage from '../../../assets/about.svg';
import monitor from '../../../assets/monitor.svg';
import exampleLogo from '../../../assets/your-logo.svg';
import uavFlying from '../../../assets/uav-flying.svg';
import arrowIcon from '../../../assets/arrow-icon.svg';

import database from '../../../database.js';

import View from '../../../components/sections/View';
import Decorate from '../../../components/sections/Decorate';
import Content from '../../../components/sections/Content';
import Contact from "../../../components/common/Contact";
import Banner from "../../../components/common/Banner";

import useOnScreen from "../../../functions/useOnScreen";
import observerNavigation from "../../../functions/observerNavigation";
import Form from "../../../components/common/Form";
import Footer from "../../../components/sections/Footer/Footer";

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
            {observerNavigation(visibleHome, visibleAbout, visibleWebsites, visibleLogotypes, visibleUav, visibleContact)}
            <div className="observer-div" ref={setRefHome}>
                <View>
                    <Decorate titleView={true} mobileView={false} url={logo} alt="Logo G&M. Podkreślony napis G&M w okręgu."/>
                    <Content titleView={true} id={"home"}/>
                </View>
            </div>
            <div className="observer-div" ref={setRefAbout}>
                <View>
                    <Content titleView={false} header={database.about.header} headerSpan={database.about.headerSpan}
                             describe={database.about.paragraph} id={"about"} button={true} link={"/freelance-offert-website/about"}/>
                    <Decorate titleView={false} url={aboutImage}
                              alt="Grafiki postaci przedstawiające nasze role,
                              grafik o ciemnych włosach, oraz programista blondyn."/>
                </View>
            </div>
            <div className="observer-div" ref={setRefWebsites}>
                <View>
                    <Decorate titleView={false} url={monitor} alt="Monitor wyświetlający przykładową stronę www."/>
                    <Content titleView={false} header={database.website.header} headerSpan={database.website.headerSpan}
                             describe={database.website.paragraph} id={"websites"} button={true} link={"/freelance-offert-website/websites"}/>
                </View>
            </div>
            <div className="observer-div" ref={setRefLogotypes}>
                <View>
                    <Content titleView={false} header={database.logotypes.header} headerSpan={database.logotypes.headerSpan}
                             describe={database.logotypes.paragraph} id={"logotypes"} button={true} link={"/freelance-offert-website/logotypes"}/>
                    <Decorate titleView={false} url={exampleLogo} alt="Przykładowe logo zaprojektowane przez Grzegorza."/>
                </View>
            </div>
            <div className="observer-div" ref={setRefUav}>
                <View>
                    <Decorate titleView={false} url={uavFlying} alt="Blond ludzik latający dronem."/>
                    <Content titleView={false} header={database.uav.header} headerSpan={database.uav.headerSpan}
                             describe={database.uav.paragraph} id={"uav"} button={true} link={"/freelance-offert-website/uav"}/>
                </View>
            </div>
            <div className="observer-div" ref={setRefContact}>
                <Banner url={arrowIcon} alt="Iconka ze strzałką." />
                <Footer>
                    <Fragment>
                        <Form />
                        <Contact />
                    </Fragment>
                </Footer>
            </div>
        </div>
    );
}

export default HomepageDesktop;