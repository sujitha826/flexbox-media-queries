import React from "react";
import "../css/MediaStyle.css";

const withTable = (TableCommon) => {
    return function WithHeader() {
        const header = ["profile", "a", "b", "c", "d", "e"];
        return (
            <div>
                <header>
                    <table className="table-style">
                        <thead>
                            <tr>{header.map((h, i) => <th key={i}>{h}</th>)}</tr>
                        </thead>
                    </table>
                </header>
                <TableCommon />
            </div>
        );
    };
};

export default withTable;