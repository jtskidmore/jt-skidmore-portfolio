import React from 'react'
import { NavLink } from 'react-router-dom';



class Navbar extends React.Component {
    render() {

        return (
            <div className="header-color">
                <ul className='body'>
                    <div className='shift'>
                        <div className="nav nav-pills">
                            <NavLink className="nav-link"
                                to="/projects"
                                exact >
                                <li className="nav-item"> PROJECTS </li></NavLink>

                            <NavLink className="nav-link"
                                to="/"
                                exact >
                                <li className="nav-item"> HOME </li></NavLink>

                            <NavLink className='nav-link'
                                to="/contact"
                                exact >
                                <li className="nav-item"> CONTACT </li></NavLink>

                        </div>
                    </div>
                </ul>
            </div>
        )
    }
}

export default Navbar;