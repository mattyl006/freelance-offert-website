import React from "react";
import './Banner.scss';
import {Link} from "react-router-dom";

function Banner({url, alt, link}) {
    return (
        <div className="Banner">
            <p className="Banner__paragraph">
                Jesteś ciekawy ile bedzie kosztowała twoja strona? Napisz do nas, to nic nie kosztuje.
            </p>
            <Link className="Banner__bar" to={link}>
                <p className="Banner__paragraph">Darmowa wycena</p>
                <img className="Banner__icon" src={url} alt={alt} />
            </Link>
        </div>
    );
}

export default Banner;
