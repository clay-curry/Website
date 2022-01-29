import React from 'react';
import '../styles/navbar.css';

class TitleBar extends React.Component {
    state = { }
    render() { 
        return ( 
            <div className='bar'>
                <h1 className='author-name'>Clayton Curry</h1>

                <img className='profile-pic' src={require('../images/Clay_Face.JPG')} alt="me" />
                
                <div className='button-container'>
                    <a className='flex-button' target='_self' href='/'>
                        <div> 
                        Research
                        </div>
                    </a>
                    <a className='flex-button' target='_blank' rel={'noreferrer'} href='https://www.jezzamon.com/fourier/index.html'>
                        <div> 
                        Interesting Stuff
                        </div>
                    </a>
                    <a className='flex-button' target='_self' href='/'>
                        <div> 
                        Projects
                        </div>
                    </a>

                </div>
            </div>
         );
    }
}




export default TitleBar;