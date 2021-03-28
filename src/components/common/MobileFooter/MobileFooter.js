import React from "react";
import "./MobileFooter.scss";

import Form from "../Form";
import Contact from "../../sections/Contact";

function MobileFooter({id}) {
    return (
        <footer className="MobileFooter">
            <h2 className="MobileFooter__header">
                NAPISZ DO NAS
            </h2>
            <Contact id={id}/>
            <Form />
        </footer>
    );
}

export default MobileFooter;