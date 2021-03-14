import React from "react";
import "./MiniContact.scss";

function MiniContact() {
    return (
        <div className="MiniContact" id="contact">
            <p className="MiniContact__paragraph">
                Telefon
            </p>
            <a className="MiniContact__link" href="tel:785161280">
                785161280
            </a>
            <a className="MiniContact__link MiniContact__link--bigger-margin" href="tel:790234428">
                790234428
            </a>
            <p className="MiniContact__paragraph">
                E-mail
            </p>
            <a className="MiniContact__link" href="mailto:front.devel06@gmail.com">
                front.devel06@gmail.com
            </a>
        </div>
    );
}

export default MiniContact;