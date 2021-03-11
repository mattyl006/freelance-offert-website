import React from "react";
import "./MobileFooter.scss";

import Form from "../Form";
import Contact from "../../sections/Contact";

function MobileFooter() {
    return (
        <footer className="MobileFooter">
            <h2 className="MobileFooter__header">
                NAPISZ DO NAS
            </h2>
            <Contact />
            <Form />
        </footer>
    );
}

export default MobileFooter;