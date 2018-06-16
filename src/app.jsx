import  React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './home';
import Sale from './sale'
import Login from  './login'

const  App = () =>(
        <Router>
            <div>
                <Route exact path="/" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/sale" component={Sale} />
            </div>
        </Router>


);
export  default App;