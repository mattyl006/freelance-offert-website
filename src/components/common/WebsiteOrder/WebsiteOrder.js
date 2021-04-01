import React from "react";
import "./WebsiteOrder.scss";

function WebsiteOrder({link}) {
    return (
        <div className="WebsiteOrder">
            <a className="WebsiteOrder__link" href={link}>
                ZAMÓW STRONĘ
            </a>
        </div>
    );
}

export default WebsiteOrder;