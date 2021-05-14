import Title from '../Title'
;
import React, {useContext} from 'react'
import {SettingsContext} from '../../data/UserSettings'


export default function Main(props) {
    const {bgColor, fontColor} = useContext(SettingsContext)

    return (
        <main className="main-content" style={{backgroundColor: bgColor, color: fontColor}}>
            <Title title={props.section} color={props.sectionColor}
                path={props.path} alt={props.section}/>
            {props.children}
        </main>
    );
}