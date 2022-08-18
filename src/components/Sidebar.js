import React from 'react';
import '../css/SidebarStyle.css';
import { SidebarRow } from './SidebarRow';

function Sidebar() {
    return (
        <div className="Sidebar">
            <ul className="SidebarList">
                {SidebarRow.map((val, key) => {
                    return (
                        <li className="EachRow" key={key} onClick={() => window.location.pathname = val.link}>
                            <div id='icon'>{val.icon}</div>
                            <div id='title'>{val.title}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Sidebar;