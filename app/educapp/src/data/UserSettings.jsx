// FIXME
import React, {useState} from 'react';

const preferences = {
    bgColor: '#ECB1B1',
    fontColor: '#303030',
    languange: '🇺🇸'
}

export const SettingsContext = React.createContext(preferences)


const UserSettings = (props) => {
    const [settings, setSettings] = useState(preferences)

    function updateSettings(key, value) {
        setSettings({
            ...settings,
            [key]: value
        })
    }

    return (
        <SettingsContext.Provider value = {{
            bgColor: settings.bgColor,
            fontColor: settings.fontColor,
            languange: settings.languange,
            setBackground: (bg) => updateSettings('bgColor', bg),
            setColor: (c) => updateSettings('fontColor', c),
            setLanguange: (l) => updateSettings('languange', l)
            
        }}>
            {props.children}
        </SettingsContext.Provider>
    );
}

export default UserSettings