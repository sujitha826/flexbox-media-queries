import React from "react";
import "../css/FlexboxStyle.css";
import TableCommon from "./TableCommon";


export default function ResponsiveFlex() {
    return (
        <div className="flex-container">
            <div className="flex-item-left"><TableCommon /></div>
            <div className="flex-item-middle"><TableCommon /></div>
            <div className="flex-item-right"><TableCommon /></div>
        </div>

    );
}

