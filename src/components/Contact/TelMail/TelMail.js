import React from "react";
import './TelMail.scss';

function TelMail() {
    return (
        <div className="TelMail">
            <div className="TelMail__container">
                <p className="TelMail__paragraph">
                    ZADZWOŃ DO NAS
                </p>
                <a className="TelMail__link" href="tel:785161280">
                    785161280
                </a>
            </div>
            <div className="TelMail__container">
                <p className="TelMail__paragraph">
                    E-MAIL
                </p>
                <a className="TelMail__link" href="mailto:front.devel06@gmail.com">
                    front.devel06@gmail.com
                </a>
            </div>
        </div>
    );
}

export default TelMail;
