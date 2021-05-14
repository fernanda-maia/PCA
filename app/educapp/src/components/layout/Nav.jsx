import React from 'react';
import Tab from '../Tab';

import { faComment, faHome, faPen, faUserAlt, faCogs, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

export default function Nav(props) {
    return (
        <React.Fragment>
        <aside className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Tab path={'/'} icon={faHome} title="Home"/>
                </li>
                
                <li className="nav-item">
                    <Tab path={'/course/'} icon={faComment} title="Course"/>
                </li>

                <li className="nav-item">
                    <Tab path={'/lessons/'} icon={faPen} title="Lessons"/>
                </li>

                <li className="nav-item">
                    <Tab path={'/account'} icon={faUserAlt} title="Account"/>
                </li>

                <li className="nav-item">
                    <Tab path={'/settings'} icon={faCogs} title="Settings"/>
                </li>

                <li className="nav-item">
                    <Tab path={'/logout'} icon={faSignOutAlt} title="Logout"/>
                </li>
            </ul>
        </aside>
        </React.Fragment>
    );
}