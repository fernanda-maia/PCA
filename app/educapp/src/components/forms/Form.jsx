// FIXME
import Img from '../../assets/img/avatar.jpg';

import React from 'react'

export default function Form(props) {
    
    return (
        <div className="user-account">
            <form className="user-form">
                <div className="form-image">
                    <input type="image" src={Img} alt="Profile" className="image-picker" />
                </div>
                <div className="pointer"></div>

                <div className="form-group">
                    <label htmlFor="form-name">Full Name</label>
                    <input type="text" value={null} id="form-name" onChange={null}
                        className="user-input"/>
                </div>

                <div className="form-group">
                    <label htmlFor="form-name">Username</label>
                    <input type="text" value={null} id="form-username" 
                        className="user-input" onChange={null}/>
                </div>

                <div className="form-group">
                    <label htmlFor="form-id">ID Number</label>
                    <input type="text" value={null} id="form-id" 
                        className="user-input" disabled/>
                </div>

                <div className="form-group">
                    <label htmlFor="form-email">Email</label>
                    <input type="email" value={null} id="form-email" 
                        className="user-input" onChange={null}/>
                </div>

                <div className="form-group">
                    <label htmlFor="form-birth">Birthday</label>
                    <input type="date" value={null} id="form-birth" 
                        className="user-input" onChange={null}/>
                </div>

                <div className="form-group">
                    <label htmlFor="form-pass">Password</label>
                    <input type="password" value={null} id="form-pass" 
                        className="user-input" onChange={null}/>
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