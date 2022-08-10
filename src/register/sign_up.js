import "./sign_up.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdBadge, faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const SignUp = () => {
    return (
    <div className="base-sign-up">
        <div className="login-logo">
        </div>
        <div className="user-data">
            <div className="for-rel">
                <h1>Sign Up</h1>
                <form>
                    <div className="two-input">
                        <div className="input-box">
                            <FontAwesomeIcon icon={faIdBadge} className="font-awesome"/>
                            <input placeholder="First Name" className="user-input" required/>
                        </div>
                        <div className="input-box">
                            <FontAwesomeIcon icon={faIdBadge} className="font-awesome"/>
                            <input placeholder="Last Name" className="user-input" required/>
                        </div>
                    </div>
                    <div className="two-input">
                        <div className="input-box">
                            <FontAwesomeIcon icon={faUser} className="font-awesome"/>
                            <input placeholder="Username or Email" className="user-input" required/>
                        </div>
                        <div className="input-box">
                            <FontAwesomeIcon icon={faLock} className="font-awesome"/>
                            <input placeholder="Password" type="password" className="user-input" required/>
                        </div>
                    </div>
                    <div className="input-box">
                        <FontAwesomeIcon icon={faEnvelope} className="font-awesome"/>
                        <input placeholder="Email" type="email" className="user-input" required/>
                    </div>
                    <div className="input-box">
                        <input type="submit" value="Sign Up"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default SignUp; 
