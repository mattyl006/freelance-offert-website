import React from "react";
import './Form.scss';
import Button from "../Button";

function Form() {
    return (
        <form className="Form" method="post" name="myemailform" action="send-mail.php">
            <p className="Form__header">
                NAPISZ DO NAS
            </p>
            <div className="Form__container">
                <fieldset className="Form__box Form__box--topic">
                    <label className="Form__label" htmlFor="topic">TEMAT:</label>
                    <input className="Form__input" id="topic" type="text" name="topic" />
                </fieldset>
                <fieldset className="Form__box">
                    <label className="Form__label" htmlFor="email">E-MAIL:</label>
                    <input className="Form__input" id="email" type="text" name="email" />
                </fieldset>
            </div>
            <fieldset className="Form__textarea-fieldset">
                <textarea name="message" id="message" className="Form__textarea" placeholder="WIADOMOŚĆ"></textarea>
            </fieldset>
            <div className="Form__button-box">
                <Button sendInput={true}>
                    WYŚLIJ
                </Button>
            </div>
        </form>
    );
}

export default Form;
