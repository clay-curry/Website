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
                <div className='buttons-container'>
                    <NavLink to='/research'>
                        <button className='button'>
                            Research
                        </button>
                    </NavLink>
                    <NavLink to='/projects'>
                        <button className='button'>
                            Projects
                        </button>
                    </NavLink>
                    <NavLink to='/contact'>
                        <button className='button'>
                            Contact
                        </button>
                    </NavLink>
                </div>
            </div>
        );
    }
}




export default NavBar;