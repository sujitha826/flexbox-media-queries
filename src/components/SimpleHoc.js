import React from "react";

const SimpleHOC = props => {
    return (
        <div className="hoc">
            <header>
                <h1>My Beautiful Heading</h1>
            </header>

            <>{props.children}</>
        </div>
    )
}

export default SimpleHOC;