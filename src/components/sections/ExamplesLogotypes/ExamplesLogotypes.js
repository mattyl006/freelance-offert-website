import React from "react";
import "./ExamplesLogotypes.scss";

import safeHouse from "../../../assets/safe-house.svg";
import newName from "../../../assets/new-name.svg";
import yourLogoDark from "../../../assets/your-logo-dark.svg";
import yourLogoLight from "../../../assets/your-logo-light.svg";
import safeHouseGold from "../../../assets/safe-house-gold.svg";

function ExamplesLogotypes() {
    return (
        <div className="ExamplesLogotypes">
            <h2 className="ExamplesLogotypes__header">
                Przykłady logotypów stworzone przez nas
            </h2>
            <div className="ExamplesLogotypes__container">
                <div className="ExamplesLogotypes__side">
                    <img className="ExamplesLogotypes__logo" src={safeHouse}
                         alt={"Przykładowe logo, czarna chatka z podpisem safe house po prawej."}/>
                    <img className="ExamplesLogotypes__logo" src={newName}
                         alt={"Przykładowe logo, niebieski napis new name."}/>
                </div>
                <div className="ExamplesLogotypes__middle">
                    <img className="ExamplesLogotypes__logo" src={yourLogoDark}
                         alt={"Przykładowe logo, napis your logo z podpisem your company name pod sobą, po lewej okrągły wzór ze strzałkami, tło jasne"}/>
                </div>
                <div className="ExamplesLogotypes__side">
                    <img className="ExamplesLogotypes__logo" src={yourLogoLight}
                         alt={"Przykładowe logo, napis your logo z podpisem your company name pod sobą, po lewej okrągły wzór ze strzałkami, tło ciemne"}/>
                    <img className="ExamplesLogotypes__logo ExamplesLogotypes__logo--gold" src={safeHouseGold}
                         alt={"Przykładowe logo, złota chatka w złotej tarczy z podpisem safe house pod sobą."}/>
                </div>
            </div>
        </div>
    );
}

export default ExamplesLogotypes;