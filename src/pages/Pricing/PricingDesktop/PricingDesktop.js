import React from "react";
import './PricingDesktop.scss';
import FreePricing from "../../../components/sections/FreePricing/FreePricing";
import PricingDecorate from "../../../components/sections/PricingDecorate";
import observerNavigationAlternative from "../../../functions/observerNavigationAlternative";

function PricingDesktop() {

    React.useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="PricingDesktop">
            {observerNavigationAlternative("pricing")}
            <FreePricing />
            <PricingDecorate />
        </div>
    );
}

export default PricingDesktop;