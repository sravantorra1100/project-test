import React from 'react'
import { NavLink } from 'react-router-dom';
import '../Styles/Header.css'
const Header = () => {
    return (
        <div className='nav'>
            <NavLink to="/" className="links"><h2 className="lin">header</h2></NavLink>
            <NavLink to="/home" className="links"><h2 className="lin">home</h2></NavLink>
            <NavLink to="/about" className="links"><h2 className="lin">about</h2></NavLink>
            <NavLink to="/login" className="links"><h2 className="lin">login</h2></NavLink>
            <NavLink to="/register" className="links"><h2 className="lin">register</h2></NavLink>
            <NavLink to="/contact" className="links"><h2 className="lin">contact</h2></NavLink>

        </div>
    )
}

export default Header