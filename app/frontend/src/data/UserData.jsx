// FIXME
import React, {useState} from 'react';

const userInfo = {
    name: 'Gandalf',
    username: 'wizard',
    idNumber: 'MAT123',
    email: 'teste@email.com',
    birthday: '1711-10-31',
    password: 'admin'

}

export const UserContext = React.createContext(userInfo)

const Storage = (props) => {
    const [user, setUser] = useState(userInfo)

    function updateUser(key, value) {
        setUser({
            ...user,
            [key]: value
        })
    }

    return (
        <UserContext.Provider value = {{
            name: user.name,
            username: user.username,
            idNumber: user.idNumber,
            email: user.email,
            birthday: user.birthday,
            password: user.password,
            setName: (n) => updateUser('name', n),
            setUsername: (u) => updateUser('username', u),
            setEmail: (e) => updateUser('email', e),
            setBirthday: (b) => updateUser('birthday', b),
            setPassword: (p) => updateUser('password', p)
        }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default Storage