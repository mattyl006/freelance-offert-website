import React from "react";
import "./View.scss";

function View({children}) {
    return (
        <div className="View">
            {children}
        </div>
    );
}

export default View;
