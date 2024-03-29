import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Authenticate from '../../Store/Authenticate';
import Toaster from '../../Utils/Constants/Toaster';
import { ToastContainer } from 'react-toastify'

export default function Header() {
    return (
        <header className="app-header w-100 shadow-sm position-relative">
            <nav className="navbar navbar-expand-lg navbar-light mw-100 ">
                <ul className="navbar-nav d-inline d-xl-none">
                    <li className="nav-item">
                        <NavLink className="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" >
                            <i className="ti ti-menu-2" />
                        </NavLink>
                    </li>
                </ul>
                
            </nav>
        </header>

    )
}
