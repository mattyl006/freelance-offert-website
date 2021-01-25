import React from "react";
import './Contact.scss';
import Form from "../../common/Form";

function Contact() {
    return (
        <section className="Contact" id="contact">
            <Form />
            <div className="Contact__container">
                <h1 className="Contact__header">
                    KONTAKT
                </h1>
                <a className="Contact__link" href="tel:785161280">
                    785161280
                </a>
                <a className="Contact__link" href="mailto:front.devel06@gmail.com">
                    front.devel06@gmail.com
                </a>
            </div>
        </section>
    );
}

export default Contact;
