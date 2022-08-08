import React, { useState } from "react";
import "../App.css";
import SearchIcon from '@mui/icons-material/Search';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    const [showLinksModal, setShowLinksModal] = useState(false);

    return (
        <div className="navbar">
            <div className="left-side">
                <div className="links" id= {showLinksModal ? "hidden" : ""}>
                    <a href="/home">Home</a>
                    <a href="/feedback">Feedback</a>
                    <a href="/aboutus">About Us</a>
                    <a href="/contact">Contact</a>
                </div>
                <button onClick={()=> setShowLinksModal(!showLinksModal)}><ReorderIcon /></button>
            </div>
            <div className="right-side">
                <input type="text" placeholder="Search..." />
                <button><SearchIcon /></button>
            </div>
        </div>
    );
}

export default Navbar;