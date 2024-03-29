import React from 'react'
import { NavLink, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Authenticate from '../../Store/Authenticate'
import Toaster from '../../Utils/Constants/Toaster'
import LocalStore from '../../Store/LocalStore'
import logo from "../../../public/assets/images/logos/logo.jpg"

export default function Sidebar() {
    const location = useLocation()
    const userHome = location.pathname === '/main/home'

    const navigate = useNavigate()

    if (userHome) return <Navigate to={'/main/user/home'} />

    return (
        <aside className="left-sidebar shadow-sm">
            {/* Sidebar scroll*/}
            <div>
                <div className=" px-0 d-flex align-items-center justify-content-between mt-2">
                    <NavLink to={'/main'} className="text-nowrap logo-img">
                        <img src={logo} alt='logo' className='img-fluid' />
                    </NavLink>
                    <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
                        <i className="ti ti-x fs-8" />
                    </div>
                </div>
                {/* Sidebar navigation*/}
                <nav className="sidebar-nav scroll-sidebar px-2" data-simplebar>
                    <ul id="sidebarnav" className="h-100 my-0 overflow-hidden">
                        <li className="nav-small-cap mt-0">
                            <i className="ti ti-dots nav-small-cap-icon fs-4" />
                            <span className="hide-menu">Home</span>
                        </li>
                        <li className="sidebar-item">
                            <NavLink to={'/main/user/home'} className="sidebar-link" aria-expanded="false" end={true}>
                                <span>
                                    <i className="ti ti-home" />
                                </span>
                                <span className="hide-menu">Home</span>
                            </NavLink>
                        </li>
                        <li className="sidebar-item">
                            <NavLink to={'/main/user/history'} className="sidebar-link" aria-expanded="false">
                                <span>
                                    <i className="ti ti-layout-dashboard" />
                                </span>
                                <span className="hide-menu">History</span>
                            </NavLink>
                        </li>
                        <li className="sidebar-item">
                            <NavLink to={'/main/user/favourites'} className="sidebar-link" aria-expanded="false">
                                <span>
                                    <i className="ti ti-heart" />
                                </span>
                                <span className="hide-menu">Favourites</span>
                            </NavLink>
                        </li>
                        <li className="sidebar-item">
                            <NavLink to={'/main/user/starred'} className="sidebar-link" aria-expanded="false">
                                <span>
                                    <i className="ti ti-star" />
                                </span>
                                <span className="hide-menu">Starred</span>
                            </NavLink>
                        </li>
                        <li className="nav-small-cap">
                            <i className="ti ti-dots nav-small-cap-icon fs-4" />
                            <span className="hide-menu">AUTH</span>
                        </li>
                        <li className="sidebar-item">
                            <NavLink to={'/main/user/empEdit'} className="sidebar-link" aria-expanded="false">
                                <span>
                                    <i className="ti ti-user" />
                                </span>
                                <span className="hide-menu">User Profile</span>
                            </NavLink>
                        </li>
                        <li className="sidebar-item">
                            <button type='button' onClick={() => {
                                Toaster.justToast('info', "   Logging You Out ......", () => {
                                    Authenticate.logoutUser();
                                    navigate('/login')
                                })
                            }} className="sidebar-link bg-transparent border-0" aria-expanded="false">
                                <span>
                                    <i className="ti ti-login" />
                                </span>
                                <span className="hide-menu">Logout</span>
                            </button>
                        </li>
                    </ul>
                </nav>
                {/* End Sidebar navigation */}
            </div>
        </aside>

    )
}
