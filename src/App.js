import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Root } from './AppStyles';
// import './App.css';

import Header from './components/theme/Header/';
import Footer from './components/theme/Footer/';
import { Home } from './components/pages/home';

function App() {
    return (
        <Root>
            <Header/>
                <Router>
                    <Home/>
                </Router>
            <Footer/>
        </Root>
    );
}

export default App;

