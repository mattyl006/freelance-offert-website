import React from "react";
import './Banner.scss';

function Banner({url, alt}) {
    return (
        <div className="Banner">
            <p className="Banner__paragraph">
                Jesteś ciekawy ile bedzie kosztowała twoja strona? Napisz do nas, to nic nie kosztuje.
            </p>
            <div className="Banner__bar">
                <p className="Banner__paragraph">Darmowa wycena</p>
                <img className="Banner__icon" src={url} alt={alt} />
            </div>
        </div>
    );
}

export default Banner;
