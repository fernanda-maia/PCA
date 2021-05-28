import {React, useReducer} from 'react'
import reducerSettings from '../store/reducers/reducerSettings'

export const userSettings = {
    bgColor: '#ECB1B1',
    fontColor: '#303030',
    languange: '🇺🇸'
}

const dataContext = React.createContext(userSettings)

const DataTeste = (props) => {
    const [dataState, dispatch] = useReducer(reducerSettings ,userSettings)

    return (
        <dataContext.Provider value = {{
            dataState,
            dispatch
        }}>
            {props.children}
        </dataContext.Provider>
    );
}

export default DataTeste