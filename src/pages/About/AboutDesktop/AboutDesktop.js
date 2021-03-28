import React from "react";
import './AboutDesktop.scss';

import useOnScreen from "../../../functions/useOnScreen";
import observerNavigation from "../../../functions/observerNavigation";
import View from "../../../components/sections/View";
import Content from "../../../components/sections/Content";
import Decorate from "../../../components/sections/Decorate";
import Banner from "../../../components/common/Banner";
import Abilities from "../../../components/sections/Abilities";
import MiniContact from "../../../components/common/MiniContact";

import aboutImage from "../../../assets/about.svg";
import nerd from "../../../assets/nerd.svg";
import designer from "../../../assets/designer.svg";
import arrowIcon from "../../../assets/arrow-icon.svg";

import database from "../../../database";

function AboutDesktop() {

    const [setRefAbout, visibleAbout] = useOnScreen({rootMargin: '-48px'});
    const [setRefProgrammer, visibleProgrammer] = useOnScreen({rootMargin: '-48px'});
    const [setRefDesigner, visibleDesigner] = useOnScreen({rootMargin: '-48px'});
    const [setRefAbilities, visibleAbilities] = useOnScreen({rootMargin: '-48px'});

    React.useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="AboutDesktop">
            {observerNavigation("about", visibleAbout, visibleProgrammer, visibleDesigner, visibleAbilities)}
            <div className="observer-div" ref={setRefAbout}>
                <View>
                    <Decorate titleView={false} url={aboutImage}
                              alt="Grafiki postaci przedstawiające nasze role,
                              grafik o ciemnych włosach, oraz programista blondyn."/>
                    <Content titleView={false} header={database.about.header} headerSpan={database.about.headerSpan}
                             describe={database.about.more} id={"about"} button={false}/>
                </View>
            </div>
            <div className="observer-div" ref={setRefProgrammer}>
                <View>
                    <Content titleView={false} header={database.programmer.header}
                             describe={database.programmer.paragraph} id={"programmer"} button={false}/>
                    <Decorate titleView={false} url={nerd} programmerView={true}
                              alt="Grafika postaci siedzącej przy biurku z komputerem i lampą."/>
                </View>
            </div>
            <div className="observer-div" ref={setRefDesigner}>
                <View>
                    <Decorate titleView={false} url={designer} designerView={true}
                              alt="Grafika przedstawiająca artystę stojącego przy X."/>
                    <Content titleView={false} header={database.designer.header}
                             describe={database.designer.paragraph} id={"programmer"} button={false}/>
                </View>
            </div>
            <div className="observer-div" ref={setRefAbilities}>
                <Banner url={arrowIcon} alt="Iconka ze strzałką." link={"/pricing"} />
                <Abilities />
                <MiniContact id={"/about#contact"}/>
            </div>
        </div>
    );
}

export default AboutDesktop;