export function updateName(dispatch, name) {
    dispatch('updateName', name)
}

export function updateUsername(dispatch, username) {
    dispatch('updateUsername', username)
}

export function updateEmail(dispatch, email) {
    dispatch('updateUsername', email)
}

export function updateBirthday(dispatch, date) {
    dispatch('updateBirthday', date)
}

export function updatePassword(dispatch, oldPassword, newPassword) {
    if(oldPassword === newPassword) {
        dispatch('updatePassword', newPassword)
    }
}

export function updateAll(dispatch, datas) {
    dispatch('updateAll', datas)
}
