import "./nav.css"

const Nav = () => {
    return (
        <div className="navbar">
            <ul className="ul-nav">
                <li className="left">
                    <div>
                    </div>
                </li>
                <li className="left">
                    <h1>
                        YAD
                    </h1>
                </li>
                <li className="right">
                    <a>Login</a>
                </li>
                <li className="right">
                    <a>Sign Up</a>
                </li>
                <li className="right">
                    <a>About</a>
                </li>
            </ul>
        </div>
    )
}

export default Nav; 
