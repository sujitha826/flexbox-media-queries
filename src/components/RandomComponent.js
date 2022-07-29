import SimpleHOC from "./SimpleHOC.js"
import React from "react";

const RandomComponent = props => {
    return (
        <SimpleHOC>
            <div className="bodyText">
                <p>This is some random body text</p>
            </div>
        </SimpleHOC>
    )
}

export default RandomComponent;