import React from "react";
import "../css/MenuLinksStyle.css";

export default function MenuLinks() {
    return (
        <div><h2>Responsive navigation menu</h2>
            <p>Resize the browser window to see the effect: When the screen is less than 600px, the navigation menu will be displayed vertically instead of horizontally.</p>

            <div className="topnav">
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </div>

        </div>
    );
}
