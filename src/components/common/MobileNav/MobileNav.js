import React from 'react';
import './MobileNav.scss';
import {Link} from "react-router-dom";

function MobileNav({subpage}) {

    const [showMenu, setShowMenu] = React.useState(false);
    let navigation;
    if(showMenu) {
        let links = [];
        let contact = subpage + "#contact";
        if(subpage) {
            links = ["/", "/about", "#", "/websites",
                "/logotypes", "/uav", contact];
            navigation = <nav className="MobileNav__navigation">
                <ul className="MobileNav__list">
                    <li className="MobileNav__item">
                        <Link className="MobileNav__link" to={links[0]}>
                            STRONA DOMOWA
                        </Link>
                    </li>
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
                        <Link className="MobileNav__link" to={links[6]}>
                            KONTAKT
                        </Link>
                    </li>
                </ul>
            </nav>;
        } else {
            navigation = <nav className="MobileNav__navigation">
                <ul className="MobileNav__list">
                    <li className="MobileNav__item">
                        <Link className="MobileNav__link" to="/#about">
                            O NAS
                        </Link>
                    </li>
                    <li className="MobileNav__item">
                        <Link className="MobileNav__link" to="/#websites">
                            STRONY INTERNETOWE
                        </Link>
                    </li>
                    <li className="MobileNav__item">
                        <Link className="MobileNav__link" to="/#logotypes">
                            LOGOTYPY
                        </Link>
                    </li>
                    <li className="MobileNav__item">
                        <Link className="MobileNav__link" to="/#uav">
                            NAGRYWANIE DRONEM
                        </Link>
                    </li>
                    <li className="MobileNav__item">
                        <Link className="MobileNav__link" to="/#contact">
                            KONTAKT
                        </Link>
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
            <p className="MobileNav__paragraph">
                MENU
            </p>
            {navigation}
        </header>
    );
}

export default MobileNav;