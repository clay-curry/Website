import React from 'react';
import '../styles/navbar.css';

class TitleBar extends React.Component {
    state = {}
    render() {
        return (
            <div id='nav'>

                <div className='buttons-container'>
                    
                    <h1 className='author-name'><a href="/">Clayton Curry</a></h1>
                
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