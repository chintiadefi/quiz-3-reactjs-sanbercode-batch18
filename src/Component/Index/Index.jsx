import React from 'react'
import Logo from './img/logo.png'
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Home from '../Home/Home'
import About from '../About/About'
import './Index.css'

function Index() {
    return(
        <BrowserRouter>
        <header>
        <img id="logo" src={Logo} width="200px"/>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </nav>
        </header>
        <section>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' exact component={About}/>
        </Switch>
        </section>
        <footer>
            <h5>copyright &copy; 2020 by Sanbercode</h5>
        </footer>
        </BrowserRouter>
    );
}

export default Index