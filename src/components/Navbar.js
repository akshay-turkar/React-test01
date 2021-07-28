import React, {useState, useEffect} from 'react'
import { Button } from './Button'
import {Link} from 'react-router-dom'
import './Navbar.css'


function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => {
        setClick(!click)
    }
    const closeMobileMenu = () => setClick(false)
   
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
        
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className = 'navbar'>
                <div className = 'navabr-container'>

                  <Link to = '/' className = 'navbar-logo' onClick = {closeMobileMenu}>
                    MySite<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hexagon" width={24} height={24} viewBox="0 0 24 24" stroke-width={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M19 6.873a2 2 0 0 1 1 1.747v6.536a2 2 0 0 1 -1.029 1.748l-6 3.833a2 2 0 0 1 -1.942 0l-6 -3.833a2 2 0 0 1 -1.029 -1.747v-6.537a2 2 0 0 1 1.029 -1.748l6 -3.572a2.056 2.056 0 0 1 2 0l6 3.573z"></path>
                        </svg>
                  </Link>

                  <div className = 'menu-icon' onClick = {handleClick}>
                      <i className = {click ? 'fa fa-times': "fa fa-bars"}/>
                  </div>

                  <ul className = {click ? 'nav-menu active': 'nav-menu'}>
                        <li className = 'nav-item'>
                          <Link to = "/" className = 'nav-links'
                           onClick = {closeMobileMenu}>
                               Home
                           </Link>
                        </li>
                        <li className = 'nav-item'>
                          <Link to = "/services" className = 'nav-links'
                           onClick = {closeMobileMenu}>
                               Services
                           </Link>
                        </li>
                        <li className = 'nav-item'>
                          <Link to = "/products" className = 'nav-links'
                           onClick = {closeMobileMenu}>
                              Products
                           </Link>
                        </li>
                        <li className = 'nav-item'>
                          <Link to = "/signup" className = 'nav-links-mobile'
                           onClick = {closeMobileMenu}>
                              Sign Up
                           </Link>
                        </li>
                  </ul>

                  {button && <Button buttonStyle = "btn--outline">SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
