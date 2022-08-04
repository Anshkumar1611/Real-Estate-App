import React from 'react'
import { FaHome } from 'react-icons/fa'

function Navbar() {
    return (
        <div className="navbar bg-base-100 text-neutral">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                        <li><a href='/rent'>Rent</a></li>
                        <li><a href='/buy'>Buy</a></li>
                        <li><a href='/sell'>Sell</a></li>
                        <li tabIndex="0">
                            <a href='/manageproperty'>
                                ManageProperty
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="menu bg-base-100 w-56">
                                <li><a href='/'>Item 1</a></li>
                                <li><a href='/'>Item 2</a></li>
                                <li><a href='/'>Item 3</a></li>
                            </ul>
                        </li>
                        <li tabIndex="0">
                            <a href='/resources'>
                                Resources
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="menu bg-base-100 w-56">
                                <li><a href='/'>Item 1</a></li>
                                <li><a href='/'>Item 2</a></li>
                                <li><a href='/'>Item 3</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <a href='/' className="btn btn-ghost normal-case text-xl"><FaHome className='mx-1 text-violet-500' />  Estatery</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><a href='/rent'>Rent</a></li>
                    <li><a href='/buy'>Buy</a></li>
                    <li><a href='/sell'>Sell</a></li>
                    <li tabIndex="0">
                        <a href='/manageproperty'>
                            ManageProperty
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="menu bg-base-100 w-56">
                            <li><a href='/'>Item 1</a></li>
                            <li><a href='/'>Item 2</a></li>
                            <li><a href='/'>Item 3</a></li>
                        </ul>
                    </li>
                    <li tabIndex="0">
                        <a href='/resources'>
                            Resources
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="menu bg-base-100 w-56">
                            <li><a href='/'>Item 1</a></li>
                            <li><a href='/'>Item 2</a></li>
                            <li><a href='/'>Item 3</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="navbar-end ">
                <a href='/signing' className="btn btn-outline btn-primary m-2">Signing</a>
                <a href='/signup' className="btn btn-primary  m-2">Signup</a>
            </div>
        </div>
    )
}

export default Navbar