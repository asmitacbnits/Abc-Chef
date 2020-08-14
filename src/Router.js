import React from 'react'
import {Route,  Switch, Router} from "react-router-dom";
import history from './history';
import Home from './components/Pages/Home/Home';
import Contact from './components/Pages/Contact';
import UserSignupStepOne from './components/Pages/User/UserSignupStepOne';
import UserSignupStepTwo from './components/Pages/User/UserSignupStepTwo';
import FindChef from './components/Pages/Chef/FindChef';
import Favourite from './components/Pages/Chef/Favourite';
import ChefSignupStepOne from './components/Pages/Chef/ChefSignupStepOne';
import ChefSignupStepTwo from './components/Pages/Chef/ChefSignupStepTwo';
import ChefSignupStepThird from './components/Pages/Chef/ChefSignupStepThird';
import ChefProfile from './components/Pages/Chef/ChefProfile';
import ChefDashboard from './components/Pages/Chef/ChefDashboard';
import ChefBook from './components/Pages/Chef/ChefBook';
import PaymentMethod from './components/Pages/Chef/PaymentMethod';
import Header from './components/common/Header';
import Footer from './components/common/Footer';


export default function Routes(props) {
    return (
         <Router history={history}>
            <Header />
                <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/Home" component={Home} />
                        <Route exact path="/Contact" component={Contact} />
                        <Route exact path="/UserSignupStepOne" component={UserSignupStepOne} />
                        <Route exact path="/UserSignupStepTwo" component={UserSignupStepTwo} />
                        <Route exact path="/FindChef" component={FindChef} />
                        <Route exact path="/Favourite" component={Favourite} />
                        <Route exact path="/ChefSignupStepOne" component={ChefSignupStepOne} />
                        <Route exact path="/ChefSignupStepTwo" component={ChefSignupStepTwo} />
                        <Route exact path="/ChefSignupStepThird" component={ChefSignupStepThird} />
                        <Route exact path="/ChefProfile" component={ChefProfile} />
                        <Route exact path="/ChefDashboard" component={ChefDashboard} />
                        <Route exact path="/ChefBook" component={ChefBook} />
                        <Route exact path="/PaymentMethod" component={PaymentMethod} />
                </Switch>
           <Footer />
       </Router>
    )
}




