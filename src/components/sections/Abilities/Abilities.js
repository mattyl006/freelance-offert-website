import React from "react";
import "./Abilities.scss";

import uamIcon from "../../../assets/uam-icon.svg";
import reactIcon from "../../../assets/react-icon.svg";
import wtfIcon from "../../../assets/wtf-icon.svg";

function Abilities() {
    return (
        <section className="Abilities">
            <h2 className="Abilities__header">
                NASZE UMIEJETNOŚCI POCHODZĄ
                Z NAJLEPSZYCH ŹRÓDEŁ
            </h2>
            <div className="Abilities__graphic-container">
                <a className="Abilities__link" href="https://wmi.amu.edu.pl/" target="_blank" rel="noreferrer">
                    <img className="Abilities__icon" src={uamIcon}/>
                </a>
                <a className="Abilities__link Abilities__link--react" href="https://szkolareacta.pl/" target="_blank" rel="noreferrer">
                    <img className="Abilities__icon" src={reactIcon}/>
                </a>
                <a className="Abilities__link" href="https://cotenfrontend.pl/" target="_blank" rel="noreferrer">
                    <img className="Abilities__icon" src={wtfIcon}/>
                </a>
            </div>
            <p className="Abilities__paragraph">
                POŁĄCZYŁ NAS WSPÓLNY <span className="Abilities__special">POMYSŁ&nbsp;</span>
                NA WIZJE <span className="Abilities__special">PRZYSZŁOŚCI</span>
            </p>
        </section>
    );
}

export default Abilities;