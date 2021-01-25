import React, {Fragment} from 'react';
import './Button.scss';

function Button({children, sendInput}) {
    return (
        <Fragment>
            {
                (sendInput === true) ?
                <input className="Button" type="submit" value={children}/>
                :
                <button className="Button">
                    {children}
                </button>
            }
        </Fragment>
    );
}

export default Button;
