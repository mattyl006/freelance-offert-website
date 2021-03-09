import React from "react";
import './Footer.scss';

function Footer({children}) {
    return (
        <footer className="Footer">
            <h2 className="Footer__header">
                NAPISZ DO NAS
            </h2>
            <div className="Footer__container">
                {children}
            </div>
        </footer>
    );
}

export default Footer;