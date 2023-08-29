import { useState } from 'react'
import {BrowserRouter as Main, Routes, Route} from "react-router-dom"
import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/AboutUs/about'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Login from './Components/Login/Login'
import Cart from './Components/Cart/Cart'
import Signup from './Components/SignUp/Signup'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Main>
    <Navbar/> 
    <Routes>
    <Route path ="/Dashboard" element = {<Dashboard/>}></Route>
    <Route path='/' element = {<Login/>}></Route>
    <Route path='/Cart' element = {<Cart/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/Contact" element={<Contact/>}></Route>
    <Route path="/Signup" element={<Signup/>}></Route>
    </Routes>
    <Footer/>
    </Main>
    </>
  )

}

export default App
