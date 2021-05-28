export default function reducerUser(state, action) {
    switch (action.type) {
        case 'updateName':
            return {...state, name: action.payload}
        
        case 'updateUsername':
            return {...state, username: action.payload}

        case 'updateEmail':
            return {...state, email: action.payload}
        
        case 'updateBirthday':
            return {...state, birthday: action.payload}

        case 'updatePassword':
            return {...state, password: action.payload}
        
        case 'updateAll':
            return {...action.payload}
        
        default:
            return state
    }
}