import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
  } from "react-router-dom";
import { Aboutus } from '../components/aboutus/Aboutus';
import { Category } from '../components/category/Category';
import { Contact } from '../components/contact/Contact';
import { Footer } from '../components/Footer';
import { Home } from '../components/home/Home';
import { NavBar } from '../components/NavBar';


export const AppRouters = () => {
    return (
    // <Router>
    //   {/* <div>
    //     <Switch>
    //         <Route exact path="/home" component={ home} />
    //     </Switch>
    //   </div> */}
    //   <NavBar />
    // </Router>
    
       <Router>
            <NavBar />
            <div>
            <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/category" component={Category} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/aboutus" component={Aboutus} />
                    <Redirect to="/home" />
                </Switch>     
            </div>

            <Footer />
        </Router>     
    )
}
