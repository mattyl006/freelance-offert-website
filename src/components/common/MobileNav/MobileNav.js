import React from 'react';
import './MobileNav.scss';

function MobileNav() {

    const [showMenu, setShowMenu] = React.useState(false);
    let navigation;
    if(showMenu) {
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