import React from 'react';
import '../styles/navbar.css';

class TitleBar extends React.Component {
    state = { }
    render() { 
        return ( 
            <div className='nav'>
                <div className='nav-item author-name'>
                    <h1><a href="/">Clayton Curry</a></h1>
                </div>

                <div className='nav-item'>
                    <div className=' profile-pic'><img className='img' src={require('../images/Clay_Face.JPG')} alt="me" /></div>
                </div>
                
                
                <div className=' nav-item buttons-container'>
                    <a target='_self' href='/'>
                        <div className='button'>
                        Research
                        </div>
                    </a>
                    <a target='_blank' rel={'noreferrer'} href='https://www.jezzamon.com/fourier/index.html'>
                        <div className='button'> 
                        Interesting Stuff
                        </div>
                    </a>
                    <a target='_self' href='/'>
                        <div className='button'> 
                        Projects
                        </div>
                    </a>
                </div>

            </div>
         );
    }
}




export default TitleBar;