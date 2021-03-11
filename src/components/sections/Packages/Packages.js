import React from "react";
import "./Packages.scss";
import database from "../../../database";

function Packages({section}) {

    let data = database;

    if(section === "websites") {
        data = database.packages.websites;
    } else if(section === "logotypes") {
        data = database.packages.logotypes;
    }

    return (
        <div className="Packages">
            <div className="Packages__decorate"> </div>
            <section className="Packages__package">
                <h2 className="Packages__header">
                    Podstawowy
                </h2>
                <ul className="Packages__list">
                    {data.basic.map(function(name, index) {
                        return <li className="Packages__item" key={index}>{name}</li>;
                    })}
                </ul>
            </section>
            <section className="Packages__package Packages__package--bigger">
                <h2 className="Packages__header">
                    Standard
                </h2>
                <ul className="Packages__list">
                    {data.standard.map(function(name, index) {
                        return <li className="Packages__item" key={index}>{name}</li>;
                    })}
                </ul>
            </section>
            <section className="Packages__package">
                <h2 className="Packages__header">
                    Rozszerzony
                </h2>
                <ul className="Packages__list">
                    {data.extended.map(function(name, index) {
                        return <li className="Packages__item" key={index}>{name}</li>;
                    })}
                </ul>
            </section>
        </div>
    );
}

export default Packages;