import React from "react";
import './PricingMobile.scss';
import MobileNav from "../../../components/common/MobileNav";
import Content from "../../../components/sections/Content";
import database from "../../../database";
import Decorate from "../../../components/sections/Decorate";
import aboutImage from "../../../assets/about.svg";
import Packages from "../../../components/sections/Packages";
import MobileFooter from "../../../components/common/MobileFooter/MobileFooter";

function PricingMobile() {
    return (
        <div className="PricingMobile">
            <MobileNav subpage={true}/>
            <Content titleView={false} header={database.pricing.header} button={false}
                     describe={database.pricing.paragraph}/>
            <Decorate titleView={false} mobileView={true} url={aboutImage}
                      alt="Grafiki postaci przedstawiające nasze role,
                              grafik o ciemnych włosach, oraz programista blondyn."/>
            <Packages section={"websites"} />
            <MobileFooter />
        </div>
    );
}

export default PricingMobile;