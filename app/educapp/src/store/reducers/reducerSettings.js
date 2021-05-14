export default function reducerSettings(state, action) {
    switch (action.type) {
        case 'updateBg':
            return {...state, bgColor: action.payload}

        case 'updateFont':
            return {...state, fontColor: action.payload}
            
        default:
            return state
    }
}