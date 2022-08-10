import "./login.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'

const LoginPage = () => {
    return (
        <div className="base-login">
            <div className="login-logo">
            </div>
            <div className="user-data">
                <div className="for-rel">
                    <h1>Login</h1>
                    <form>
                        <div className="input-box">
                            <FontAwesomeIcon icon={faUser} className="font-awesome"/>
                            <input placeholder="Username or Email" className="user-input" required/>
                        </div>
                        <div className="input-box">
                            <FontAwesomeIcon icon={faLock} className="font-awesome"/>
                            <input placeholder="Password" type="password" className="user-input" required/>
                        </div>
                        <div className="input-box">
                            <input type="submit" value="Sign In"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage; 
