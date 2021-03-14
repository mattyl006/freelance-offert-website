import React from "react";
import "./PricingDecorateGraphic.scss";

function PricingDecorateGraphic({url, alt}) {
    return (
        <div className="PricingDecorateGraphic">
            <img className="PricingDecorateGraphic__image" src={url} alt={alt}/>
        </div>
    );
}

export default PricingDecorateGraphic;