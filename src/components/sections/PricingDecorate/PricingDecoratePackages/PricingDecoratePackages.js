import React from "react";
import "./PricingDecoratePackages.scss";
import database from "../../../../database";

function PricingDecoratePackages({section}) {

    let data = database;

    if(section === "websites") {
        data = database.packages.websites;
    } else if(section === "logotypes") {
        data = database.packages.logotypes;
    }

    return (
        <div className="PricingDecoratePackages">
            <section className="PricingDecoratePackages__package PricingDecoratePackages__package--basic">
                <h2 className="PricingDecoratePackages__header">
                    Podstawowy
                </h2>
                <ul className="PricingDecoratePackages__list">
                    {data.basic.map(function(name, index) {
                        return <li className="PricingDecoratePackages__item" key={index}>{name}</li>;
                    })}
                </ul>
            </section>
            <section className="PricingDecoratePackages__package PricingDecoratePackages__package--bigger">
                <h2 className="PricingDecoratePackages__header">
                    Standard
                </h2>
                <ul className="PricingDecoratePackages__list">
                    {data.standard.map(function(name, index) {
                        return <li className="PricingDecoratePackages__item" key={index}>{name}</li>;
                    })}
                </ul>
            </section>
            <section className="PricingDecoratePackages__package">
                <h2 className="PricingDecoratePackages__header">
                    Rozszerzony
                </h2>
                <ul className="PricingDecoratePackages__list">
                    {data.extended.map(function(name, index) {
                        return <li className="PricingDecoratePackages__item" key={index}>{name}</li>;
                    })}
                </ul>
            </section>
        </div>
    );
}

export default PricingDecoratePackages;