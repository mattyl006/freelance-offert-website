import React, {Fragment} from 'react';
import './Content.scss';
import Slider from "../../common/Slider/Slider";
import Button from "../../common/Button";

function Content({titleView, header, headerSpan, describe, id}) {
    return (
        <section className="Content" id={id}>
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
                            Więcej
                        </Button>
                    </Fragment>
            }
        </section>
    );
}

export default Content;
