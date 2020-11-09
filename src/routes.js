import React, {Component} from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar/navBar';
// import MainPage from './components/MainPage/mainpage';

// import AboutUs from './aboutUs/aboutUs';
// import ContactUs from './contact/contact';
// import Blog from './blog/blog';
// import Portfolio from './portfolio/portfolio';


class Routes extends Component{
    render(){
        return(
            <BrowserRouter>
            <Switch>
                    <Route path="/" exact component={NavBar} />
                    {/* <Route path="/" exact component={MainPage} /> */}
                    {/* <Route path="/about"  component={AboutUs} />
                    <Route path="/contact"  component={ContactUs} />
                    <Route path="/blog"  component={Blog} />
                    <Route path="/portfolio"  component={Portfolio} /> */}
                </Switch>
            </BrowserRouter>
                
            
        )
    }
}
export default Routes;