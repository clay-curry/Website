import React, { Fragment, ReactComponentElement, ReactElement } from 'react';
import { NavLink, RouteObject } from 'react-router-dom';
import '../styles/navbar.css';
import Home from './Home';
import Research from './Research';

import { resourceUsage } from 'process';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TupleType } from 'typescript';

const page_routes = Array(
    [Home,      '/'],
    [Research,  '/research'],
    [Research,  '/projects']
)
interface NavProp {
    pages: Array<Array<any>>;
}


function NavBar() {    
    const width = -1;
    if (width > 10000000)
        return <Bar props={pages: page_routes} />;
    else
        return <MiniBar pages={page_routes} />;
}; 


class Bar extends React.Component {
    constructor(props : NavProp) {
        super(props)
    }
    render(){
        links = this.state.pages.map((page) => 
                    <NavLink to={ page[1] }>
                            { page[0] }
                    </NavLink>
                );

        return (
            <div id='nav'>
                <a className='author-name' href="/"><h1>Clayton B. <span className='last-name'>Curry</span></h1></a>
                <Router>
                    <Routes>
                    <div className='buttons-container'>
                        

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
                    </Routes>
                </Router>
            </div>
        );
    }
}



class MiniBar extends React.Component {
    constructor(props) {
        super(props);
        this.setState({ 
            isExpanded: false,
            collapsableContent: Array<HrefLink>()
         })
      }
    
    _clickHandler(){

    }

    _name() {
         {/* My name */}
         return <a className='author-name' href="/"><h1>{this.props.firstname} <span className='last-name'>{this.props.lastname}</span></h1></a>
    }

    _navBarToggler()
    {
        {/* Collapse button */}
        return (
            <button className="navbar-toggler second-button" type="button" onClick={this._clickHandler} data-target="#navbarSupportedContent23"
            aria-controls="navbarSupportedContent23" aria-expanded="false" aria-label="Toggle navigation">
            <div className="animated-icon2"><span></span><span></span><span></span><span></span></div>
            </button>
        );   
    }

    addLink(props: {name: string, link: string})
    render() {
        return (<Fragment> 
        {/*Navbar*/}
            <nav className="navbar navbar-dark red lighten-1 mb-4">

                this._name()
                this._navBarToggler()

                {/* Collapsible content */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent23">

                    {/* Links */}
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink to='/research'>
                            <div className='button'>
                                Research
                            </div>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <a target='_blank' rel={'noreferrer'} href='https://www.jezzamon.com/fourier/index.html'>
                            <div className='button'>
                                Interesting Stuff
                            </div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a target='_self' href='/'>
                            <div className='button'>
                                Projects
                            </div>
                        </a>
                    </li>
                    </ul>
                    {/* Links */}
                </div>
            

        </nav>
        {/*/.Navbar*/}


    </Fragment>);
    }
}







export default NavBar;