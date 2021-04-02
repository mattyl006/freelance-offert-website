import React from "react";
import "./RealizationsUav.scss";

function RealizationsUav() {
    return (
        <section className="RealizationsUav">
            <h2 className="RealizationsUav__header">
                Nasze realizacje
            </h2>
            <p className="RealizationsUav__paragraph">
                FILMY
            </p>
            <div className="RealizationsUav__container">
                <iframe className="RealizationsUav__video" width="560" height="315" src="https://www.youtube.com/embed/WPx0xZgh03U"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
                <div className="RealizationsUav__content">
                    <p className="RealizationsUav__paragraph">
                        Film zrealizowany w celu uatrakcyjnienia
                        sprzedaży samochodu BWM 1 F20.
                        Wykonany przez nas przy użyciu drona
                        DJI MAVIC AIR 2.
                    </p>
                    <p className="RealizationsUav__paragraph">
                        ZAPRASZAMY DO ZAPOZNANIA SIĘ I SKORZYSTANIA
                        Z NASZEJ USŁUGI!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default RealizationsUav;