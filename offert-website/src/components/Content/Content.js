import React, {Fragment} from 'react';
import './Content.scss';
import Slider from "./Slider/Slider";
import Button from "./Button";

function Content({titleView, header}) {
    return (
        <section className="Content">
            {
                (titleView) ?
                    <Slider />
                    :
                    <Fragment>
                        <h2>{header}</h2>
                        <Button />
                    </Fragment>
            }
        </section>
    );
}

export default Content;
