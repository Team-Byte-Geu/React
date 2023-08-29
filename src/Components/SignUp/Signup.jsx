import { Link } from 'react-router-dom'
import './Signup.css'
const Signup = () => {
  return (
    <main className="blend">
    <div className="form signup-form" id="signup-form">
    <div className="container">
    <div className="row ">
    <div className="col signin-btn m-2">
        <Link className="" to="/">Sign-In</Link>
</div>
<div className="col signup-btn">
        <Link className="" to="/Signup">Sign-Up</Link>
</div>
        </div>
    </div>
        <label for="signup-email" className="label">Email<br/>
            <input type="text" id="signup-username" className="field" placeholder="Email"/>
        </label>

        <label for="signup-password" className="label">Password<br/>
            <input type="password" id="signup-password" className="field" placeholder="Password"/>
        </label>
        
        <label for="signup-password" className="label">Confirm Password<br/>
            <input type="password" id="signup-confirm-password" className="field" placeholder="Confirm Password"/>
        </label>
        <button className="btn" id="signup">Sign up</button>
        <small>Already have an account? <Link to='/' className='sign-in-link'>Sign-In</Link></small>
    </div>

</main>
  )
}

export default Signup
