import React from "react";
import './LogotypesMobile.scss';
import ExamplesLogotypes from "../../../components/sections/ExamplesLogotypes";
import MobileNav from "../../../components/common/MobileNav";
import Decorate from "../../../components/sections/Decorate";
import exampleLogo from "../../../assets/your-logo.svg";
import Content from "../../../components/sections/Content";
import database from "../../../database";
import Packages from "../../../components/sections/Packages";
import MobileFooter from "../../../components/common/MobileFooter/MobileFooter";

function LogotypesMobile() {

    React.useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="LogotypesMobile">
            <MobileNav />
            <Decorate titleView={false} mobileView={true} url={exampleLogo}
                      alt="Przykładowe logo zaprojektowane przez Grzegorza." id={"logotypes"}/>
            <Content titleView={false} header={database.logotypes.header} button={false}
                     headerSpan={database.logotypes.headerSpan}
                     describe={database.logotypes.more}/>
             <Packages section={"logotypes"} />
            <ExamplesLogotypes />
            <MobileFooter />
        </div>
    );
}

export default LogotypesMobile;