import React from "react";
import "../css/MediaStyle.css";

const withTable = (TableCommon) => {
    return function WithHeader({ headerInfo }) {
        const header = headerInfo;
        return (
            <div>
                    <table className="table-style">
                        <thead>
                            <tr>{header.map((h, i) => <th key={i}>{h}</th>)}</tr>
                        </thead>
                    </table>
                
                <TableCommon />
            </div>
        );
    };
};

export default withTable;             