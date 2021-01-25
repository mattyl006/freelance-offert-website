import React, {Fragment} from 'react';

import './Decorate.scss';

import Header from "../../common/Header";

function Decorate({titleView, url, alt}) {
    return (
        <div className="Decorate">
            {
                (titleView === true) ?
                    <Fragment>
                        <img className="Decorate__image" src={url} alt={alt}/>
                        <Header/>
                    </Fragment>
                    :
                    <Fragment>
                        <img className="Decorate__image" src={url} alt={alt}/>
                    </Fragment>
            }
        </div>
    );
}

export default Decorate;
