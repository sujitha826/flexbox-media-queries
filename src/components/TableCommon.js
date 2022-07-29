import React from "react";
import "../css/MediaStyle.css";
import withTable from "./HocHeader";

function TableCommon() {
    const json = {
        data: {
            available: {
                profileOne: {
                    a: 14,
                    b: 14,
                    c: 0,
                    d: 0,
                    e: 18
                },
                profileTwo: {
                    a: 13,
                    b: 9,
                    c: 0,
                    d: 0,
                    e: 18
                },
                profileThree: {
                    "a": 12,
                    "b": 12,
                    "c": 0,
                    "d": 0,
                    "e": 14
                }
            }
        }
    };
    
    return (
        <div className="wrapper">
            <table className="table-style">
                <tbody>
                    {Object.keys(json.data.available).map((k, i) => {
                        let data = json.data.available[k];
                        return (
                            <tr key={i}>
                                <td>{k}</td>
                                <td>{data.a}</td>
                                <td>{data.b}</td>
                                <td>{data.c}</td>
                                <td>{data.d}</td>
                                <td>{data.e}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default withTable(TableCommon);