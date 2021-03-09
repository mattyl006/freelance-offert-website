import React from "react";
import './Form.scss';
import Button from "../Button";

function Form() {
    return (
        <form className="Form" method="post" name="mail-form">
            <div className="Form__container">
                <fieldset className="Form__textarea-fieldset">
                    <textarea name="message" id="message" className="Form__textarea" placeholder="Napisz wiadomość"></textarea>
                </fieldset>
                <div className="Form__data-container">
                    <fieldset className="Form__data-rectangle">
                        <label className="Form__label" htmlFor="name">Imie i nazwisko</label>
                        <input className="Form__input" id="name" type="text" name="name" />
                    </fieldset>
                    <fieldset className="Form__data-rectangle">
                        <label className="Form__label" htmlFor="email">E-mail</label>
                        <input className="Form__input" id="email" type="text" name="email" />
                    </fieldset>
                    <fieldset className="Form__data-rectangle">
                        <label className="Form__label" htmlFor="tel-number">Numer telefonu</label>
                        <input className="Form__input" id="tel-number" type="text" name="tel-number" />
                    </fieldset>
                </div>
            </div>
            <div className="Form__button-container">
                <Button sendInput={true}>
                    Wyślij
                </Button>
                <p className="Form__agree">
                    wysyłając powyższy formularz wyrażam zgodę na przetwarzanie moich danych osobowych w celach marketingowych
                    i handlowych. Wspomniane dane zostaną użyte w celu udzielenia odpowiedzi na przesłane zapytanie.
                </p>
            </div>
        </form>
    );
}

export default Form;
