import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/style.css';

class NavBar extends React.Component {
    render() {
        return (
            <div id='nav'>
                <div className='buttons-container'>
                    <h1 className='my-name'><a href="/">Clayton B. Curry</a></h1>
                
                    <NavLink to='/research'>
                        <div className='button'>
                            Research
                        </div>
                    </NavLink>
                    <NavLink to='/projects'>
                        <div className='button'>
                            Projects
                        </div>
                    </NavLink>
                    <NavLink to='/contact'>
                        <div className='button'>
                            Contact
                        </div>
                    </NavLink>
                </div>
            </div>
        );
    }
}




export default NavBar;