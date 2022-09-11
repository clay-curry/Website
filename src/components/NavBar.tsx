import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

class NavBar extends React.Component {
    render() {
        return (
            <div id='nav'>
                <div className='name-container'>
                    <a className='my-name' href="/">Clayton B. Curry</a>
                </div>
                <ul className='buttons-container'>
                    <li className='button'>
                        <NavLink to='/research'>Research</NavLink>
                    </li>

                    <li className='button'>
                        <NavLink to='/projects'>Projects</NavLink>
                    </li>

                    <li className='button'>
                        <NavLink to='/contact'>Contact</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavBar;