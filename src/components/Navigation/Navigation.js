import React from "react";
import './Navigation.scss';

function Navigation({logo, linkColor, leftBackgroundColor, rightBackgroundColor}) {
    return (
        <header className="Navigation">
            <nav className="Navigation__nav">
                <div className="Navigation__left" style={{backgroundColor: leftBackgroundColor}}>
                    <a href="#home" className="Navigation__home">
                        <img src={logo} className="Navigation__image" alt="G&M logo wersja mini"/>
                    </a>
                </div>
                <div className="Navigation__right" style={{backgroundColor: rightBackgroundColor}}>
                    <ul className="Navigation__list">
                        <li className="Navigation__item">
                            <a href="#about" className="Navigation__link" style={{color: linkColor}}>
                                O NAS
                            </a>
                        </li>
                        <li className="Navigation__item Navigation__item--offer">
                            <a href="#home" className="Navigation__link" style={{color: linkColor}}>
                                OFERTA
                            </a>
                            <ul className="Navigation__sublist">
                                <li className="Navigation__item Navigation__item--subitem">
                                    <a href="#websites" className="Navigation__link Navigation__link--sublink" style={{color: linkColor}}>
                                        STRONY INTERNETOWE
                                    </a>
                                </li>
                                <li className="Navigation__item Navigation__item--subitem">
                                    <a href="#logotypes" className="Navigation__link Navigation__link--sublink" style={{color: linkColor}}>
                                        LOGOTYPY
                                    </a>
                                </li>
                                <li className="Navigation__item Navigation__item--subitem">
                                    <a href="#uav" className="Navigation__link Navigation__link--sublink" style={{color: linkColor}}>
                                        NAGRYWANIE DRONEM
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="Navigation__item">
                            <a href="#contact" className="Navigation__link" style={{color: linkColor}}>
                                KONTAKT
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navigation;
