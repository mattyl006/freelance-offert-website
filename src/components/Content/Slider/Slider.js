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
    const [timer, setTimer] = React.useState(0);

    function tick() {
        if(timer === 7) {
            setTimer(0);
        }
        else {
            let newTimer = timer + 1;
            setTimer(newTimer);
        }
    }

    let timerID = 0;

    React.useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        timerID = setInterval(() => tick(), 1000);
        return () => {
            clearInterval(timerID);
        };
    });

    function sliderHandler() {
        console.log(timer);
        if (timer >= 2 && timer < 5) {
            return sliderContent.normal.logotypes;
        } else if(timer >= 5 && timer <= 7) {
            return sliderContent.normal.uav;
        } else {
            return sliderContent.normal.websites;
        }
    }
    function sliderYellowHandler() {
        if (timer >= 2 && timer < 5) {
            return sliderContent.yellow.logotypes;
        } else if(timer >= 5 && timer <= 7) {
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
