import React from "react";
import "./FreePricingForm.scss";
import Button from "../../common/Button";

function FreePricingForm() {

    return (
        <form className="FreePricingForm" method="post" name="mail-form">
            <fieldset className="FreePricingForm__checkbox-fieldset">
                <legend className="FreePricingForm__checkbox-legend">
                    DODATKOWE INFORMACJE
                </legend>
                <div className="FreePricingForm__checkbox-grid">
                    <p className="FreePricingForm__checkbox-paragraph">
                        <label className="FreePricingForm__checkbox-label" htmlFor="checkbox">
                            Posiadasz już gotowe zdjęcia/grafiki do strony
                        </label>
                        <input className="FreePricingForm__checkbox-input" name="checkbox" id="checkbox" type="checkbox"/>
                    </p>
                    <p className="FreePricingForm__checkbox-paragraph">
                        <label className="FreePricingForm__checkbox-label" htmlFor="checkbox">
                            Posiadasz już gotową treść do strony
                        </label>
                        <input className="FreePricingForm__checkbox-input" name="checkbox" id="checkbox" type="checkbox"/>
                    </p>
                    <p className="FreePricingForm__checkbox-paragraph">
                        <label className="FreePricingForm__checkbox-label" htmlFor="checkbox">
                            Posiadasz już stronę internetową ale chcesz ją unowocześnić
                        </label>
                        <input className="FreePricingForm__checkbox-input" name="checkbox" id="checkbox" type="checkbox"/>
                    </p>
                    <p className="FreePricingForm__checkbox-paragraph">
                        <label className="FreePricingForm__checkbox-label" htmlFor="checkbox">
                            Posiadasz już logo swojej firmy
                        </label>
                        <input className="FreePricingForm__checkbox-input" name="checkbox" id="checkbox" type="checkbox"/>
                    </p>
                    <p className="FreePricingForm__checkbox-paragraph">
                        <label className="FreePricingForm__checkbox-label" htmlFor="checkbox">
                            Chciałbyś treść w wersji polskiej i angielskiej
                        </label>
                        <input className="FreePricingForm__checkbox-input" name="checkbox" id="checkbox" type="checkbox"/>
                    </p>
                    <p className="FreePricingForm__checkbox-paragraph">
                        <label className="FreePricingForm__checkbox-label" htmlFor="checkbox">
                            Dodatkowe grafiki do strony stworzone przez nas dla Ciebie
                        </label>
                        <input className="FreePricingForm__checkbox-input" name="checkbox" id="checkbox" type="checkbox"/>
                    </p>
                    <p className="FreePricingForm__checkbox-paragraph">
                        <label className="FreePricingForm__checkbox-label" htmlFor="checkbox">
                            Możliwość samodzielnej manipulacji treścią w oparciu o system wordpress
                        </label>
                        <input className="FreePricingForm__checkbox-input" name="checkbox" id="checkbox" type="checkbox"/>
                    </p>
                    <p className="FreePricingForm__checkbox-paragraph">
                        <label className="FreePricingForm__checkbox-label" htmlFor="checkbox">
                            Chciałbyś abyśmy stworzyli dla Ciebie logo twojej firmy dopasowane do strony internetowej
                        </label>
                        <input className="FreePricingForm__checkbox-input" name="checkbox" id="checkbox" type="checkbox"/>
                    </p>
                </div>
            </fieldset>
            <div className="FreePricingForm__container">
                <fieldset className="FreePricingForm__textarea-fieldset">
                    <textarea name="message" id="message" className="Form__textarea" placeholder="OPISZ CO POTRZEBUJESZ"></textarea>
                </fieldset>
                <div className="FreePricingForm__data-container">
                    <fieldset className="FreePricingForm__data-rectangle">
                        <label className="FreePricingForm__label" htmlFor="name">Imie i nazwisko</label>
                        <input className="FreePricingForm__input" id="name" type="text" name="name" />
                    </fieldset>
                    <fieldset className="FreePricingForm__data-rectangle">
                        <label className="FreePricingForm__label" htmlFor="email">E-mail</label>
                        <input className="FreePricingForm__input" id="email" type="text" name="email" />
                    </fieldset>
                    <fieldset className="FreePricingForm__data-rectangle FreePricingForm__data-rectangle--last">
                        <label className="FreePricingForm__label" htmlFor="tel-number">Numer telefonu</label>
                        <input className="FreePricingForm__input" id="tel-number" type="text" name="tel-number" />
                    </fieldset>
                </div>
            </div>
            <div className="FreePricingForm__button-container">
                <Button sendInput={true}>
                    Wyślij
                </Button>
                <p className="FreePricingForm__agree">
                    wysyłając powyższy formularz wyrażam zgodę na przetwarzanie moich danych osobowych w celach marketingowych
                    i handlowych. Wspomniane dane zostaną użyte w celu udzielenia odpowiedzi na przesłane zapytanie.
                </p>
            </div>
        </form>
    );
}

export default FreePricingForm;