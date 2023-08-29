
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  return (
    <main className="blend">
    <div className="form signin-form" id="signin-form">
    <div className="container">
    <div className="row">
    <div className="col signin-button m-2">
        <Link className="" to="/">Sign-In</Link>
</div>
<div className="col signup-button">
        <Link className="" to="/Signup">Sign-Up</Link>
</div>
        </div>
    </div>
        <label for="email" className="label">Email<br/>
            <input type="email" id="signin-email" className="field" placeholder="Email"/>
        </label>
        
        <label for="password" className="label">Password<br/>
            <input type="password" id="signin-password" className="field" placeholder="Password"/>
        </label>
        
                
        <label className="label">
            <input type="checkbox" name="" id="remember" className="check"/><span>Show Password</span>
        </label>

        <button className="btn" id="signin" >Sign in</button>

    </div>
</main>
  )
}

export default Login