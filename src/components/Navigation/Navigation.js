import React from "react";
import './Navigation.scss';

function Navigation({logo}) {
    return (
        <header className="Navigation">
            <nav className="Navigation__nav">
                <div className="Navigation__left">
                    <a href="#" className="Navigation__home">
                        <img src={logo} className="Navigation__image"/>
                    </a>
                </div>
                <div className="Navigation__right">
                    <a href="#about" className="Navigation__link">
                        O NAS
                    </a>
                    <a href="#" className="Navigation__link">
                        OFERTA
                    </a>
                    <a href="#contact" className="Navigation__link">
                        KONTAKT
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navigation;
