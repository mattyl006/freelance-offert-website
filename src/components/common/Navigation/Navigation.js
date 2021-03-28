import React from "react";
import './Navigation.scss';
import {Link} from "react-router-dom";

function Navigation({logo, linkColor, leftBackgroundColor, rightBackgroundColor, subpage}) {
    let links = [];
    let contact = subpage + "#contact";
    if(subpage) {
        links = ["/#home", "/about", "#", "/websites",
            "/logotypes", "/uav", contact];

        return (
            <header className="Navigation">
                <nav className="Navigation__nav">
                    <div className="Navigation__left" style={{backgroundColor: leftBackgroundColor}}>
                        <Link to={links[0]} className="Navigation__home">
                            <img src={logo} className="Navigation__image" alt="G&M logo wersja mini"/>
                        </Link>
                    </div>
                    <div className="Navigation__right" style={{backgroundColor: rightBackgroundColor}}>
                        <ul className="Navigation__list">
                            <li className="Navigation__item">
                                <Link to={links[1]} className="Navigation__link" style={{color: linkColor}}>
                                    O NAS
                                </Link>
                            </li>
                            <li className="Navigation__item Navigation__item--offer">
                                <p className="Navigation__link" style={{color: linkColor}}>
                                    OFERTA
                                </p>
                                <ul className="Navigation__sublist" style={{backgroundColor: rightBackgroundColor}}>
                                    <li className="Navigation__item Navigation__item--subitem">
                                        <Link to={links[3]} className="Navigation__link Navigation__link--sublink" style={{color: linkColor}}>
                                            STRONY INTERNETOWE
                                        </Link>
                                    </li>
                                    <li className="Navigation__item Navigation__item--subitem">
                                        <Link to={links[4]} className="Navigation__link Navigation__link--sublink" style={{color: linkColor}}>
                                            LOGOTYPY
                                        </Link>
                                    </li>
                                    <li className="Navigation__item Navigation__item--subitem">
                                        <Link to={links[5]} className="Navigation__link Navigation__link--sublink" style={{color: linkColor}}>
                                            NAGRYWANIE DRONEM
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="Navigation__item">
                                <Link to={links[6]} className="Navigation__link" style={{color: linkColor}}>
                                    KONTAKT
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    } else {
        return (
            <header className="Navigation">
                <nav className="Navigation__nav">
                    <div className="Navigation__left" style={{backgroundColor: leftBackgroundColor}}>
                        <Link to="/#home" className="Navigation__home">
                            <img src={logo} className="Navigation__image" alt="G&M logo wersja mini"/>
                        </Link>
                    </div>
                    <div className="Navigation__right" style={{backgroundColor: rightBackgroundColor}}>
                        <ul className="Navigation__list">
                            <li className="Navigation__item">
                                <Link to="/#about" className="Navigation__link" style={{color: linkColor}}>
                                    O NAS
                                </Link>
                            </li>
                            <li className="Navigation__item Navigation__item--offer">
                                <p className="Navigation__link" style={{color: linkColor}}>
                                    OFERTA
                                </p>
                                <ul className="Navigation__sublist" style={{backgroundColor: rightBackgroundColor}}>
                                    <li className="Navigation__item Navigation__item--subitem">
                                        <Link to="/#websites" className="Navigation__link Navigation__link--sublink" style={{color: linkColor}}>
                                            STRONY INTERNETOWE
                                        </Link>
                                    </li>
                                    <li className="Navigation__item Navigation__item--subitem">
                                        <Link to="/#logotypes" className="Navigation__link Navigation__link--sublink" style={{color: linkColor}}>
                                            LOGOTYPY
                                        </Link>
                                    </li>
                                    <li className="Navigation__item Navigation__item--subitem">
                                        <Link to="/#uav" className="Navigation__link Navigation__link--sublink" style={{color: linkColor}}>
                                            NAGRYWANIE DRONEM
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="Navigation__item">
                                <Link to="/#contact" className="Navigation__link" style={{color: linkColor}}>
                                    KONTAKT
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Navigation;
