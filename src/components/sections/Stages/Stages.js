import React from "react";
import "./Stages.scss";

function Stages() {
    return (
        <section className="Stages">
            <h2 className="Stages__header">
                ETAPY REALIZACJI PROJEKTU
            </h2>
            <div className="Stages__decorate"> </div>
            <ol className="Stages__list">
                <div className="Stages__stages-border"> </div>
                <div className="Stages__block Stages__block--left">
                    <span className="Stages__number">
                        1.
                    </span>
                    <li className="Stages__item">
                        przyjęcie wycena
                    </li>
                </div>
                <div className="Stages__block">
                    <span className="Stages__number">
                        2.
                    </span>
                    <li className="Stages__item">
                        projektowanie wstępne
                    </li>
                </div>
                <div className="Stages__block">
                    <span className="Stages__number">
                        3.
                    </span>
                    <li className="Stages__item">
                        poprawki
                    </li>
                </div>
                <div className="Stages__block">
                    <span className="Stages__number">
                        4.
                    </span>
                    <li className="Stages__item">
                        kodowanie implementacja
                    </li>
                </div>
                <div className="Stages__block Stages__block--right">
                    <span className="Stages__number">
                        5.
                    </span>
                    <li className="Stages__item">
                        aktywacja uruchomienie
                    </li>
                </div>
            </ol>
        </section>
    );
}

export default Stages;