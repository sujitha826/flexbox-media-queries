import React from 'react';
import '../App.css';
import SidebarRow from './SidebarRow';

function Sidebar() {
    return (
        <div className='sidebar'>
            <ul>
                {SidebarRow.map((val, key) => {
                    <li key={key} onClick={() => window.location.pathname = val.link}>
                        <div>{val.icon}</div>
                        <div>{val.title}</div>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default Sidebar;