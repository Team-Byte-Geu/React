
import './Navbar.css'
import logo from '../../assets/logo.png'

import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <>
    <header className="header">
            <navbar className="navbar main-div">
            <nav className="container">
            <div className='col-md-6'>
              <img  className="img-fluid hero " src={logo} alt="" />
              </div>
              <div className='col-md-6 nav-item'>
              <ul className="d-flex justify-content-center nav-content container-fluid ">
              <li className="p-3"><Link to="/Cart">Cart</Link></li>
              <li className="p-3"><Link to="/About">About</Link></li>
              <li className="p-3"><Link to="/Contact">Contact Us</Link></li>
              <li className="p-3"><Link to="#">
                  <i className="fa-solid fa-circle-user fa-xl"></i>
                  </Link>
                  <div className="dropdown">
                  </div>
              </li>
 
              </ul>
              </div>
            </nav>
      
            </navbar>
            </header>
    </>

  )
}

export default Navbar
