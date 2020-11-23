import React from 'react'
import { NavLink } from 'react-router-dom';



class Navbar extends React.Component {
    render() {

        return (
            <div >
                <ul className='body'>
                    <div className='shift'>
                        <div className="nav-links">
                            <NavLink className="link"
                                to="/projects"
                                exact >
                                <li className="nav-li"> PROJECTS </li></NavLink>


                            <NavLink className='link'
                                to="/contact"
                                exact >
                                <li className="nav-li"> CONTACT </li></NavLink>

                        </div>
                    </div>
                </ul>
            </div>
        )
    }
}

export default Navbar;