import React from "react";
import "./FreePricing.scss";
import Form from "../../common/Form";

function FreePricing() {
    return (
        <div className="FreePricing">
            <h1 className="FreePricing__header">
                Darmowa wycena
            </h1>
            <p className="FreePricing__paragraph">
                Jeśli posiadasz sprecyzowane wymagania co do strony czy sklepu internetowego zapraszamy do wypełnienia
                formularza. Jego wypełnienie nie zajmie Ci więcej jak kilka minut, a pozwoli nam na przedstawienie
                szczegółowiej oferty. Jeśli jeszcze do końca nie wiesz czego oczekujesz, po prostu wpisz swoje
                oczekiwania, a my skontaktujemy się by dopytać o szczegóły i przedstawić możliwe scenariusze.
            </p>
            <Form />
        </div>
    );
}

export default FreePricing;