// FIXME
import '../../assets/css/Settings.css';

import React from 'react'

export default function Panel (props) {

    return (
        <div className = "user-account">
            <div className="list-item">
                <span className="title-opt">Background Color: </span>
                <input type="color" value={null} className="input-color"
                    onChange={null}/>
            </div>
            <hr className="divider" />

            <div className="list-item">
                <span className="title-opt">Font Color: </span>
                <input type="color" value={null} className="input-color"
                    onChange={null}/>
            </div>
            <hr className="divider" />

            <div className="list-item">
                <span className="title-opt">Language: </span>
                <span>{null}</span>
            </div>
        </div>
    );
} 

