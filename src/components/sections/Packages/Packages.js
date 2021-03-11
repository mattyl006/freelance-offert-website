import React from "react";
import "./Packages.scss";
import database from "../../../database";

function Packages() {
    return (
        <div className="Packages">
            <div className="Packages__decorate"> </div>
            <section className="Packages__package">
                <h2 className="Packages__header">
                    Podstawowy
                </h2>
                <ul className="Packages__list">
                    <li className="Packages__item">
                        STRONA WIZYTÓWKOWA
                    </li>
                    <li className="Packages__item">
                        ONE PAGE
                    </li>
                    <li className="Packages__item  Packages__item--last">
                        W OPARCIU O WYBRANY SZABLON WORDPRESS
                    </li>
                </ul>
            </section>
            <section className="Packages__package Packages__package--bigger">
                <h2 className="Packages__header">
                    Standard
                </h2>
                <ul className="Packages__list">
                    <li className="Packages__item">
                        ORIGINALNY PROJEKT STRONY WYKONANY PRZEZ NAS WEDŁUG TWOICH POTRZEB
                    </li>
                    <li className="Packages__item">
                        STRONA WIZYTÓWKOWA
                    </li>
                    <li className="Packages__item">
                        ONE PAGE
                    </li>
                    <li className="Packages__item Packages__item--last">
                        PROFESJONALNIE NAPISANY KOD WEDŁUG NAJNOWSZYCH STANDARDÓW
                    </li>
                </ul>
            </section>
            <section className="Packages__package">
                <h2 className="Packages__header">
                    Rozszerzony
                </h2>
                <ul className="Packages__list">
                    <li className="Packages__item">
                        ORIGINALNY PROJEKT STRONY WYKONANY PRZEZ NAS WEDŁUG TWOICH POTRZEB
                    </li>
                    <li className="Packages__item">
                        WIELE PODSTRON
                    </li>
                    <li className="Packages__item  Packages__item--last">
                        PROFESJONALNIE NAPISANY KOD WEDŁUG NAJNOWSZYCH STANDARDÓW
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default Packages;