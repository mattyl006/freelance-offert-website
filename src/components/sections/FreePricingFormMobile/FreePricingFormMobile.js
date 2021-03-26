import React from "react";
import "./FreePricingFormMobile.scss";
import Button from "../../common/Button";

function FreePricingFormMobile() {

    return (
        <form className="FreePricingFormMobile" method="post" name="mail-form">
            <fieldset className="FreePricingFormMobile__checkbox-fieldset">
                <legend className="FreePricingFormMobile__checkbox-legend">
                    DODATKOWE INFORMACJE
                </legend>
                <p className="FreePricingFormMobile__checkbox-paragraph">
                    <label className="FreePricingFormMobile__checkbox-label" htmlFor="checkbox">
                        Posiadasz już gotowe zdjęcia/grafiki do strony
                    </label>
                    <input className="FreePricingFormMobile__checkbox-input" name="checkbox" id="checkbox" type="checkbox"/>
                </p>
                <p className="FreePricingFormMobile__checkbox-paragraph">
                    <label className="FreePricingFormMobile__checkbox-label" htmlFor="checkbox">
                        Posiadasz już gotową treść do strony
                    </label>
                    <input className="FreePricingFormMobile__checkbox-input" name="checkbox" id="checkbox" type="checkbox"/>
                </p>
                <p className="FreePricingFormMobile__checkbox-paragraph">
                    <label className="FreePricingFormMobile__checkbox-label" htmlFor="checkbox">
                        Posiadasz już stronę internetową ale chcesz ją unowocześnić
                    </label>
                    <input className="FreePricingFormMobile__checkbox-input" name="checkbox" id="checkbox" type="checkbox"/>
                </p>
                <p className="FreePricingFormMobile__checkbox-paragraph">
                    <label className="FreePricingFormMobile__checkbox-label" htmlFor="checkbox">
                        Posiadasz już logo swojej firmy
                    </label>
                    <input className="FreePricingFormMobile__checkbox-input" name="checkbox" id="checkbox" type="checkbox"/>
                </p>
                <p className="FreePricingFormMobile__checkbox-paragraph">
                    <label className="FreePricingFormMobile__checkbox-label" htmlFor="checkbox">
                        Chciałbyś treść w wersji polskiej i angielskiej
                    </label>
                    <input className="FreePricingFormMobile__checkbox-input" name="checkbox" id="checkbox" type="checkbox"/>
                </p>
                <p className="FreePricingFormMobile__checkbox-paragraph">
                    <label className="FreePricingFormMobile__checkbox-label" htmlFor="checkbox">
                        Dodatkowe grafiki do strony stworzone przez nas dla Ciebie
                    </label>
                    <input className="FreePricingFormMobile__checkbox-input" name="checkbox" id="checkbox" type="checkbox"/>
                </p>
                <p className="FreePricingFormMobile__checkbox-paragraph">
                    <label className="FreePricingFormMobile__checkbox-label" htmlFor="checkbox">
                        Możliwość samodzielnej manipulacji treścią w oparciu o system wordpress
                    </label>
                    <input className="FreePricingFormMobile__checkbox-input" name="checkbox" id="checkbox" type="checkbox"/>
                </p>
                <p className="FreePricingFormMobile__checkbox-paragraph">
                    <label className="FreePricingFormMobile__checkbox-label" htmlFor="checkbox">
                        Chciałbyś abyśmy stworzyli logo firmy dopasowane do twojej strony internetowej
                    </label>
                    <input className="FreePricingFormMobile__checkbox-input" name="checkbox" id="checkbox" type="checkbox"/>
                </p>
            </fieldset>
            <div className="FreePricingFormMobile__gradient-background" id="contact">
                <div className="FreePricingFormMobile__container">
                    <p className="FreePricingFormMobile__header">
                        NAPISZ DO NAS
                    </p>
                    <fieldset className="FreePricingFormMobile__textarea-fieldset">
                        <textarea name="message" id="message" className="FreePricingFormMobile__textarea" placeholder="OPISZ CO POTRZEBUJESZ"></textarea>
                    </fieldset>
                    <div className="FreePricingFormMobile__data-container">
                        <fieldset className="FreePricingFormMobile__data-rectangle">
                            <label className="FreePricingFormMobile__label" htmlFor="name">Imie i nazwisko</label>
                            <input className="FreePricingFormMobile__input" id="name" type="text" name="name" />
                        </fieldset>
                        <fieldset className="FreePricingFormMobile__data-rectangle">
                            <label className="FreePricingFormMobile__label" htmlFor="email">E-mail</label>
                            <input className="FreePricingFormMobile__input" id="email" type="text" name="email" />
                        </fieldset>
                        <fieldset className="FreePricingFormMobile__data-rectangle FreePricingFormMobile__data-rectangle--last">
                            <label className="FreePricingFormMobile__label" htmlFor="tel-number">Numer telefonu</label>
                            <input className="FreePricingFormMobile__input" id="tel-number" type="text" name="tel-number" />
                        </fieldset>
                    </div>
                </div>
                <div className="FreePricingFormMobile__button-container">
                    <Button sendInput={true}>
                        Wyślij
                    </Button>
                    <p className="FreePricingFormMobile__agree">
                        wysyłając powyższy formularz wyrażam zgodę na przetwarzanie moich danych osobowych w celach marketingowych
                        i handlowych. Wspomniane dane zostaną użyte w celu udzielenia odpowiedzi na przesłane zapytanie.
                    </p>
                </div>
            </div>
        </form>
    );
}

export default FreePricingFormMobile;