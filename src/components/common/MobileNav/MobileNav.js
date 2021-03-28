import React from 'react';
import './MobileNav.scss';
import {Link} from "react-router-dom";

function MobileNav({subpage}) {

    const [showMenu, setShowMenu] = React.useState(false);
    let navigation;
    if(showMenu) {
        let links = [];
        if(subpage) {
            links = ["/", "/about", "#", "/websites",
                "/logotypes", "/uav", "#contact"];
            navigation = <nav className="MobileNav__navigation">
                <ul className="MobileNav__list">
                    <li className="MobileNav__item">
                        <Link className="MobileNav__link" to={links[1]}>
                            O NAS
                        </Link>
                    </li>
                    <li className="MobileNav__item">
                        <Link className="MobileNav__link" to={links[3]}>
                            STRONY INTERNETOWE
                        </Link>
                    </li>
                    <li className="MobileNav__item">
                        <Link className="MobileNav__link" to={links[4]}>
                            LOGOTYPY
                        </Link>
                    </li>
                    <li className="MobileNav__item">
                        <Link className="MobileNav__link" to={links[5]}>
                            NAGRYWANIE DRONEM
                        </Link>
                    </li>
                    <li className="MobileNav__item">
                        <a className="MobileNav__link" href={links[6]}>
                            KONTAKT
                        </a>
                    </li>
                </ul>
            </nav>;
        } else {
            navigation = <nav className="MobileNav__navigation">
                <ul className="MobileNav__list">
                    <li className="MobileNav__item">
                        <a className="MobileNav__link" href="#about">
                            O NAS
                        </a>
                    </li>
                    <li className="MobileNav__item">
                        <a className="MobileNav__link" href="#websites">
                            STRONY INTERNETOWE
                        </a>
                    </li>
                    <li className="MobileNav__item">
                        <a className="MobileNav__link" href="#logotypes">
                            LOGOTYPY
                        </a>
                    </li>
                    <li className="MobileNav__item">
                        <a className="MobileNav__link" href="#uav">
                            NAGRYWANIE DRONEM
                        </a>
                    </li>
                    <li className="MobileNav__item">
                        <a className="MobileNav__link" href="#contact">
                            KONTAKT
                        </a>
                    </li>
                </ul>
            </nav>;
        }
    }

    return (
        <header className="MobileNav">
            <button className="MobileNav__button"
                    onClick={() => setShowMenu(!showMenu)}>
                &nbsp;
            </button>
            {navigation}
        </header>
    );
}

export default MobileNav;