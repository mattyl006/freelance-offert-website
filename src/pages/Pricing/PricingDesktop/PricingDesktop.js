import React from "react";
import './PricingDesktop.scss';
import FreePricing from "../../../components/sections/FreePricing/FreePricing";
import PricingDecorate from "../../../components/sections/PricingDecorate";

function PricingDesktop() {
    return (
        <div className="PricingDesktop">
            <FreePricing />
            <PricingDecorate />
        </div>
    );
}

export default PricingDesktop;