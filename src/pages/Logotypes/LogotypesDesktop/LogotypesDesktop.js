import React from "react";
import './LogotypesDesktop.scss';
import useOnScreen from "../../../functions/useOnScreen";
import observerNavigation from "../../../functions/observerNavigation";
import View from "../../../components/sections/View";
import Content from "../../../components/sections/Content";
import database from "../../../database";
import Decorate from "../../../components/sections/Decorate";
import exampleLogo from "../../../assets/your-logo.svg";
import Packages from "../../../components/sections/Packages";
import Banner from "../../../components/common/Banner";
import Footer from "../../../components/common/Footer";
import arrowIcon from "../../../assets/arrow-icon.svg";
import ExamplesLogotypes from "../../../components/sections/ExamplesLogotypes";

function LogotypesDesktop() {

    const [setRefLogotypes, visibleLogotypes] = useOnScreen({rootMargin: '-48px'});
    const [setRefOffert, visibleOffert] = useOnScreen({rootMargin: '-48px'});

    React.useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="LogotypesDesktop">
            {observerNavigation(visibleLogotypes, visibleOffert)}
            <div className="observer-div" ref={setRefLogotypes}>
                <View>
                    <Decorate titleView={false} url={exampleLogo} alt="Przykładowe logo zaprojektowane przez Grzegorza."/>
                    <Content titleView={false} header={database.logotypes.header} headerSpan={database.logotypes.headerSpan}
                             describe={database.logotypes.more} id={"logotypes"} button={false}/>
                </View>
            </div>
            <div className="observer-div" ref={setRefOffert}>
                <Packages section={"logotypes"} />
                <ExamplesLogotypes />
                <Banner url={arrowIcon} alt="Iconka ze strzałką." />
                <Footer />
            </div>
        </div>
    );
}

export default LogotypesDesktop;