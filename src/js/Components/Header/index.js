import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './header.scss'

import logo from './../../../images/react_logo_small.jpg'


export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header__logo">
                    <a href="#">
                        <img src={logo} alt="alt"/>
                    </a>
                </div>
                <div className="header__nav">
                    <nav className="header__nav-list">
                        <NavLink to="/" className="header__nav-item" exact={true} activeClassName="active" >Home </NavLink>
                        <NavLink to="/about" className="header__nav-item" activeClassName="active">About </NavLink>
                        <NavLink to="/company" className="header__nav-item" activeClassName="active">Company </NavLink>
                        <NavLink to="/products" className="header__nav-item" activeClassName="active">Products </NavLink>
                        <NavLink to="/services" className="header__nav-item" activeClassName="active">Services </NavLink>
                        <NavLink to="/contacts" className="header__nav-item" activeClassName="active">Contacts </NavLink>
                    </nav>
                </div>
            </header>
        )
    }
}