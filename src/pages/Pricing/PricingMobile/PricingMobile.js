import React from "react";
import './PricingMobile.scss';
import database from "../../../database";
import aboutImage from "../../../assets/about.svg";

import MobileNav from "../../../components/common/MobileNav";
import Content from "../../../components/sections/Content";
import Decorate from "../../../components/sections/Decorate";
import Packages from "../../../components/sections/Packages";
import FreePricingFormMobile from "../../../components/sections/FreePricingFormMobile";

function PricingMobile() {
    return (
        <div className="PricingMobile">
            <MobileNav subpage={"pricing"}/>
            <Content titleView={false} header={database.pricing.header} button={false}
                     describe={database.pricing.paragraph}/>
            <Decorate titleView={false} mobileView={true} url={aboutImage}
                      alt="Grafiki postaci przedstawiające nasze role,
                              grafik o ciemnych włosach, oraz programista blondyn."/>
            <Packages section={"websites"} />
            <FreePricingFormMobile />
        </div>
    );
}

export default PricingMobile;