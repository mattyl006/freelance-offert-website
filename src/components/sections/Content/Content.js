import React, {Fragment} from 'react';
import './Content.scss';
import Slider from "../../common/Slider/Slider";
import Button from "../../common/Button";
import {Link} from "react-router-dom";

function Content({titleView, header, headerSpan, describe, id, button, link}) {

    if(titleView) {
        return (
            <div className="Content" id={id}>
                <Slider />
            </div>
        );
    } else if(button) {
        return (
            <section className="Content" id={id}>
                <Fragment>
                    <h2 className="Content__header">
                        {header}
                        <span className="Content__span">
                                    {headerSpan}
                                </span>
                    </h2>
                    <p className="Content__paragraph">
                        {describe}
                    </p>
                    <Button>
                        <Link className="Content__link" to={link}>
                            Więcej
                        </Link>
                    </Button>
                </Fragment>
            </section>
        );
    } else {
        return (
            <section className="Content" id={id}>
                <Fragment>
                    <h2 className="Content__header">
                        {header}
                        <span className="Content__span">
                                    {headerSpan}
                                </span>
                    </h2>
                    <p className="Content__paragraph">
                        {describe}
                    </p>
                </Fragment>
            </section>
        );
    }
}

export default Content;
