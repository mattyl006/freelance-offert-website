import React from "react";
import "./PricingDecorate.scss";
import PricingDecoratePackages from "./PricingDecoratePackages";

function PricingDecorate() {
    return (
        <div className="FreePricingDecorate">
            <PricingDecoratePackages section={"websites"} />
        </div>
    );
}

export default PricingDecorate;