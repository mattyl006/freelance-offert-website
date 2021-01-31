import React from "react";
import './Contact.scss';
import Form from "../../common/Form";

function Contact() {
    return (
        <section className="Contact" id="contact">
            <Form />
            <div className="Contact__container">
                <h2 className="Contact__header">
                    KONTAKT
                </h2>
                <div className="Contact__box">
                    <p className="Contact__paragraph">
                        ZADZWOŃ DO NAS
                    </p>
                    <a className="Contact__link" href="tel:785161280">
                        785161280
                    </a>
                    <a className="Contact__link" href="tel:785161280">
                        790234428
                    </a>
                    <p className="Contact__paragraph">
                        E-MAIL
                    </p>
                    <a className="Contact__link" href="mailto:front.devel06@gmail.com">
                        front.devel06@gmail.com
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
