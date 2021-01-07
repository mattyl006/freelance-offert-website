import React, {Fragment} from 'react';
import './Content.scss';
import Slider from "./Slider/Slider";
import Button from "./../../common/Button";

function Content({titleView, header, headerSpan, describe}) {
    return (
        <section className="Content">
            {
                (titleView) ?
                    <Slider />
                    :
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
                            WIĘCEJ
                        </Button>
                    </Fragment>
            }
        </section>
    );
}

export default Content;
