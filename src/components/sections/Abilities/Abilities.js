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
                <img className="Abilities__icon" src={uamIcon}/>
                <img className="Abilities__icon Abilities__icon--react" src={reactIcon}/>
                <img className="Abilities__icon" src={wtfIcon}/>
            </div>
            <p className="Abilities__paragraph">
                POŁĄCZYŁ NAS WSPÓLNY <span className="Abilities__special">POMYSŁ&nbsp;</span>
                NA WIZJE <span className="Abilities__special">PRZYSZŁOŚCI</span>
            </p>
        </section>
    );
}

export default Abilities;