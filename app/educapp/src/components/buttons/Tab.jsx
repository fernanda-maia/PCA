import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

export default function Tab(props) {
    return (
        <Link to={props.path}>
            <div className="nav-link">
                <span className="nav-icon">
                    <FontAwesomeIcon icon={props.icon} className='fas'/>
                </span>
                <span className="nav-title">{props.title}</span>
            </div>
        </Link>
    )
}