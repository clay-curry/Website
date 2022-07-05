import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

class NavBar extends React.Component {
    state = {}
    render() {
        return (
            <div id='nav'>

                <div className='buttons-container'>
                    
                    <h1 className='author-name'><a href="/">Clayton B. Curry</a></h1>
                
                    <NavLink to='/about'>
                        <div className='button'>
                            About Me
                        </div>
                    </NavLink>
                    <a target='_blank' rel={'noreferrer'} href='https://www.jezzamon.com/fourier/index.html'>
                        <div className='button'>
                            Interesting Stuff
                        </div>
                    </a>
                    <a target='_self' href='https://www.jezzamon.com/fourier/index.html'>
                        <div className='button'>
                            Projects
                        </div>
                    </a>
                </div>

            </div>
        );
    }
}




export default NavBar;