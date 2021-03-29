import React from 'react'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import "./Header.css"
import Navbar from './Navbar'

export default props => (
    <header className='main-header'>
        <a href='/#/' className='logo'>
            <span className='logo-mini'><b>My</b>M</span>
            <span className='logo-lg'>
                <div className="logo-lg-alinhada">
                    <FaRegMoneyBillAlt />
                    <span><b> My</b> Money</span>
                </div>
            </span>
        </a>
        <nav className='navbar navbar-static-top'>
            <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
            <Navbar />
        </nav>
    </header>
)