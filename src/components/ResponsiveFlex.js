import React from "react";
import "../css/FlexboxStyle.css";
import TableCommon from "./TableCommon";
import withTable from "./HocHeader";
const FinalTable = withTable(TableCommon);

export default function ResponsiveFlex() {
    const header1 = ["Profile", "a", "b", "c", "d", "e"];
    const header2 = ["Profile", "f", "g", "h", "i", "j"];
    const header3 = ["Profile", "k", "l", "m", "n", "o"];
    const header4 = ["Profile", "p", "q", "r", "s", "t"];
    return (
        <div className="flex-container">
            <div className="flex-item"><FinalTable headerInfo={header1} /></div>
            <div className="flex-item"><FinalTable headerInfo={header2} /></div>
            <div className="flex-item"><FinalTable headerInfo={header3} /></div>
            <div className="flex-item"><FinalTable headerInfo={header4} /></div>
        </div>

    );
}

