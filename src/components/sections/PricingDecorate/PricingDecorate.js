import React from "react";
import "./PricingDecorate.scss";
import PricingDecoratePackages from "./PricingDecoratePackages";
import PricingDecorateGraphic from "./PricingDecorateGraphic";
import aboutImage from '../../../assets/about.svg';


function PricingDecorate() {
    return (
        <div className="FreePricingDecorate">
            <PricingDecoratePackages section={"websites"} />
            <PricingDecorateGraphic alt="Grafiki postaci przedstawiające nasze role, grafik o ciemnych włosach, oraz programista blondyn." url={aboutImage}/>
        </div>
    );
}

export default PricingDecorate;