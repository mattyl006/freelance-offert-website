import React from "react";
import './Banner.scss';

function Banner({url, alt, link}) {
    return (
        <div className="Banner">
            <p className="Banner__paragraph">
                Jesteś ciekawy ile bedzie kosztowała twoja strona? Napisz do nas, to nic nie kosztuje.
            </p>
            <a className="Banner__bar" href={link}>
                <p className="Banner__paragraph">Darmowa wycena</p>
                <img className="Banner__icon" src={url} alt={alt} />
            </a>
        </div>
    );
}

export default Banner;
