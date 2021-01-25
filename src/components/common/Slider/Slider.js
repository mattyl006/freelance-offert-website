import React from 'react';
import './Slider.scss';

const sliderContent = {
    normal: {
        websites: "STRONY",
        logotypes: "LOGO TO KLUCZ DO",
        uav: "NAGRYWANIE"
    },
    yellow: {
        websites: "INTERNETOWE",
        logotypes: "SUKCESU",
        uav: "DRONEM"
    },
};

function Slider() {

    const [iterator, setIterator] = React.useState(0);
    const [iteratorForYellows, setIteratorForYellows] = React.useState(0);

    React.useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const iterators = setInterval(() => iteratorsHandler(), 2500);
        return () => {
            clearInterval(iterators);
        };
    });

    function iteratorsHandler() {
        if (iterator === 2 && iteratorForYellows === 2) {
            let newIterator = 0;
            let newIteratorForYellows = 0;
            setIterator(newIterator);
            setIteratorForYellows(newIteratorForYellows);
        } else {
            let newIterator = iterator + 1;
            let newIteratorForYellows = iteratorForYellows + 1;
            setIterator(newIterator);
            setIteratorForYellows(newIteratorForYellows);
        }
    }

    function sliderHandler() {
        if (iterator === 1) {
            return sliderContent.normal.logotypes;
        } else if(iterator === 2) {
            return sliderContent.normal.uav;
        } else {
            return sliderContent.normal.websites;
        }
    }

    function sliderYellowHandler() {
        if (iteratorForYellows === 1) {
            return sliderContent.yellow.logotypes;
        } else if(iteratorForYellows === 2) {
            return sliderContent.yellow.uav;
        } else {
            return sliderContent.yellow.websites;
        }
    }

    return (
        <span className="Slider">
            {sliderHandler()}
            <div className="Slider__yellow">
                {sliderYellowHandler()}
            </div>
        </span>
    );
}

export default Slider;
