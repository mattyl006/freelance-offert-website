import React from "react";
import "./WebsiteOrder.scss";
import {Link} from "react-router-dom";

function WebsiteOrder({link}) {
    return (
        <div className="WebsiteOrder">
            <Link className="WebsiteOrder__link" to={link}>
                ZAMÓW STRONĘ
            </Link>
        </div>
    );
}

export default WebsiteOrder;