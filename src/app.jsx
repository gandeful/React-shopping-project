import  React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './home';
import Login from './account/login'

const  App = () =>(
        <Router>
            <div>
                <Route exact path="/" component={Login} />
                <Route path="/home" component={Home} />

            </div>
        </Router>


);
export  default App;