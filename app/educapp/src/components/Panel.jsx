import '../assets/css/Settings.css';

import React, {useContext} from 'react'
import {SettingsContext} from '../data/UserSettings'

export default function Panel (props) {
    const {bgColor, fontColor, languange} = useContext(SettingsContext)
    const {setBackground, setColor} = useContext(SettingsContext)

    return (
        <div className = "user-account">
            <div className="list-item">
                <span className="title-opt">Background Color: </span>
                <input type="color" value={bgColor} className="input-color"
                    onChange={(ev) => setBackground(ev.target.value)}/>
            </div>
            <hr className="divider" />

            <div className="list-item">
                <span className="title-opt">Font Color: </span>
                <input type="color" value={fontColor} className="input-color"
                    onChange={(ev) => setColor(ev.target.value)}/>
            </div>
            <hr className="divider" />

            <div className="list-item">
                <span className="title-opt">Language: </span>
                <span>{languange}</span>
            </div>
        </div>
    );
} 

