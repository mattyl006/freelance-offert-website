import React, {Fragment} from "react";
import './Footer.scss';
import Form from "../Form";
import Contact from "../Contact";

function Footer() {
    return (
        <footer className="Footer">
            <h2 className="Footer__header">
                NAPISZ DO NAS
            </h2>
            <div className="Footer__container">
                <Form />
                <Contact />
            </div>
        </footer>
    );
}

export default Footer;