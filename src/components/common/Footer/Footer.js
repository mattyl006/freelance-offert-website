import React from "react";
import './Footer.scss';
import Form from "../Form";
import Contact from "../../sections/Contact";

function Footer({id}) {
    return (
        <footer className="Footer">
            <p className="Footer__header">
                NAPISZ DO NAS
            </p>
            <div className="Footer__container">
                <Form />
                <Contact id={id} />
            </div>
        </footer>
    );
}

export default Footer;