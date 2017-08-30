import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="/">Coding Outfitters</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Features</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Pricing</NavLink>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        Navbar text with an inline element
              </span>
                </div>
            </nav>
        )
    }
}

export default NavBar