import React from "react";
import "../css/MediaStyle.css";

export default function MediaQueries() {
    return (
        <div className="wrapper">
            <div id="leftsidebar">
                <ul id="menulist">
                    <li className="menuitem">Menu-item 1</li>
                    <li className="menuitem">Menu-item 2</li>
                    <li className="menuitem">Menu-item 3</li>
                    <li className="menuitem">Menu-item 4</li>
                    <li className="menuitem">Menu-item 5</li>
                </ul>
            </div>

            <div id="main">
                <h1>Resize the browser window to see the effect!</h1>
                <p>This example shows a menu that will float to the left of the page if the viewport is 480 pixels wide or wider. If the viewport is less than 480 pixels, the menu will be on top of the content.</p>
            </div>
        </div>
    );
}