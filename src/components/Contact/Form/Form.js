import React from "react";
import './Form.scss';
import Button from "./../../../common/Button";

function Form() {
    return (
        <form className="Form">
            <p className="Form__header">
                NAPISZ DO NAS
            </p>
            <div className="Form__container">
                <div className="Form__box Form__box--topic">
                    <label className="Form__label" htmlFor="topic">TEMAT:</label>
                    <input className="Form__input" id="topic" type="text" name="topic" />
                </div>
                <div className="Form__box">
                    <label className="Form__label" htmlFor="email">E-MAIL:</label>
                    <input className="Form__input" id="email" type="text" name="email" />
                </div>
            </div>
            <textarea className="Form__textarea" placeholder="WIADOMOŚĆ"></textarea>
            <div className="Form__button-box">
                <Button>
                    WYŚLIJ
                </Button>
            </div>
        </form>
    );
}

export default Form;
