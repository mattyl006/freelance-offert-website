import React from "react";
import './Form.scss';

function Form() {
    return (
        <form className="Form">
            <p className="Form__header">
                NAPISZ DO NAS
            </p>
            <div className="Form__container">
                <div className="Form__box">
                    <label htmlFor="topic">TEMAT:</label>
                    <input id="topic" type="text" name="topic" />
                </div>
                <div className="Form__box">
                    <label htmlFor="email">E-MAIL:</label>
                    <input id="email" type="text" name="email" />
                </div>
            </div>
            <textarea className="Form__textarea" placeholder="WIADOMOŚĆ"> </textarea>
        </form>
    );
}

export default Form;
