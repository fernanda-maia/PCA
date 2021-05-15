// FIXME
import Img from '../assets/img/avatar.jpg';

import React, {useContext} from 'react'
import {UserContext} from '../data/UserData'

export default function Form(props) {
    const {name, username, idNumber, email, birthday, password} = useContext(UserContext)
    const {setName, setUsername, setEmail, setBirthday, setPassword} = useContext(UserContext)


    return (
        <div className="user-account">
            <form className="user-form">
                <div className="form-image">
                    <input type="image" src={Img} alt="Profile" className="image-picker" />
                </div>
                <div className="pointer"></div>

                <div className="form-group">
                    <label htmlFor="form-name">Full Name</label>
                    <input type="text" value={name} id="form-name" onChange={(ev) => setName(ev.target.value)}
                        className="user-input"/>
                </div>

                <div className="form-group">
                    <label htmlFor="form-name">Username</label>
                    <input type="text" value={username} id="form-username" 
                        className="user-input" onChange={(ev) => setUsername(ev.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="form-id">ID Number</label>
                    <input type="text" value={idNumber} id="form-id" 
                        className="user-input" disabled/>
                </div>

                <div className="form-group">
                    <label htmlFor="form-email">Email</label>
                    <input type="email" value={email} id="form-email" 
                        className="user-input" onChange={(ev) => setEmail(ev.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="form-birth">Birthday</label>
                    <input type="date" value={birthday} id="form-birth" 
                        className="user-input" onChange={(ev) => setBirthday(ev.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="form-pass">Password</label>
                    <input type="password" value={password} id="form-pass" 
                        className="user-input" onChange={(ev) => setPassword(ev.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="form-confirm">Confirm</label>
                    <input type="password" id="form-confirm" 
                        className="user-input" required placeholder="Password" />
                </div>

                <div className="form-group">
                    <button className="form-btn">Update</button>

                    <button className="form-btn">Delete</button>
                </div>
            </form>
        </div>
    );
}