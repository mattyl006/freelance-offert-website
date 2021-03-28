import React from 'react';
import './Content.scss';
import Slider from "../../common/Slider/Slider";
import Button from "../../common/Button";
import {Link} from "react-router-dom";

function Content({titleView, header, headerSpan, describe, button, link}) {

    if(titleView) {
        return (
            <div className="Content">
                <Slider />
            </div>
        );
    } else if(button) {
        return (
            <section className="Content">
                <h2 className="Content__header">
                    {header}
                    <span className="Content__span">
                                {headerSpan}
                            </span>
                </h2>
                <p className="Content__paragraph">
                    {describe}
                </p>
                <Link className="Content__link" to={link}>
                    <Button>
                            Więcej
                    </Button>
                </Link>
            </section>
        );
    } else {
        return (
            <section className="Content">
                <h2 className="Content__header">
                    {header}
                    <span className="Content__span">
                                {headerSpan}
                            </span>
                </h2>
                <p className="Content__paragraph">
                    {describe}
                </p>
            </section>
        );
    }
}

export default Content;
