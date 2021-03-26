import React from "react";
import "./PackageUav.scss";

function PackageUav() {
    return (
        <section className="PackageUav">
            <div className="PackageUav__decorate"> </div>
            <div className="PackageUav__container">
                <h2 className="PackageUav__header">
                    Pakiet FOR YOU
                </h2>
                <p className="PackageUav__paragraph">
                    Zgodnie z twoimi oczekiwaniami zrobimy dla Ciebie zdjęcia i filmy z drona. Oferujemy Ci usługi oparte
                    na dronie firmy DJI nagrywającym w jakości 4K. Realizujemy większość zleceń nagrywania i wykonywania
                    fotografii z powietrza.
                    Możemy również zarejestrowany materiał zmontować i dostosować do Twoich potrzeb i oczekiwań.
                </p>
                <p className="PackageUav__paragraph">
                    TO WSZYSTKO ZROBIMY Z PASJI ZA SYMBOLICZNA CENĘ!
                </p>
                <p className="PackageUav__footer">
                    ZOBACZ NIŻEJ
                </p>
            </div>
        </section>
    );
}

export default PackageUav;