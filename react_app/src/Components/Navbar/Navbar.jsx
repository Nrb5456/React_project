import React, {useState} from 'react'
import './Navbar.css'
import * as FaIcons from 'react-icons/fa6'
import * as IoIcons5 from "react-icons/io5"
import { Link } from 'react-router-dom'

function Navbar() {
    const [sidenav, setSidenav] = useState(false)

    const showSidenav = () => setSidenav(!sidenav)

    return (
        <>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidenav}/>
                </Link>
            </div>
            <nav className={sidenav ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <IoIcons5.IoClose />
                        </Link>    
                    </li>  
                </ul>
            </nav>
        </>
    );
}

export default Navbar;