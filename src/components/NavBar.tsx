import React from 'react';
import '../styles/navbar.css';

class TitleBar extends React.Component {
    state = {}
    render() {
        return (
            <div className='nav'>

                <div className='author-name'>
                    <h1><a href="/">Clayton Curry</a></h1>
                </div>


                <div className='profile-pic'>
                    <img src={require('../images/Clay_Face.JPG')} alt="Portrait of Clayton Curry" />
                </div>


                <div className='buttons-container'>
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