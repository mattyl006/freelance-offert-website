import React, {Fragment} from 'react';
import {Markup} from 'interweave';
import './Content.scss';
import Slider from "./Slider/Slider";
import Button from "./Button";

function Content({titleView, header, describe}) {
    return (
        <section className="Content">
            {
                (titleView) ?
                    <Slider />
                    :
                    <Fragment>
                        <h2 className="Content__header">{header}</h2>
                        <p className="Content__paragraph">
                            <Markup content={describe} />
                        </p>
                        <Button />
                    </Fragment>
            }
        </section>
    );
}

export default Content;
