// FIXME
import '../assets/css/LogOut.css';
import {Link} from 'react-router-dom'

export default function LogOut(props) {

    return (
        <div className="modal">
            <div className="user-account login-box">

                <form className="user-form">
                    <h2 className="title-login">Educapp</h2>
                    <div className="form-group">
                        <label htmlFor="form-name">Username</label>
                        <input type="text" id="form-name" className="user-input"
                                placeholder="Username" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="form-password">Password</label>
                        <input type="password" id="form-password" className="user-input"
                                placeholder="Password"/>
                    </div>
                </form>

                <Link to="/">
                    <button className="login-btn">Login</button>
                </Link>

            </div>
        </div>
    );
}