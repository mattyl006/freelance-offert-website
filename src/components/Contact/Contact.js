import React from "react";
import './Contact.scss';

import TelMail from "./TelMail";

function Contact() {
    return (
        <section className="Contact">
            <h1 className="Contact__header">
                KONTAKT
            </h1>
            <div className="Contact__container">
                <TelMail />
            </div>
        </section>
    );
}

export default Contact;
