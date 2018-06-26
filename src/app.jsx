import  React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './routes/home';
import Login from './routes/account/login'

const  App = () =>(
        <Router>
            <div className={'full-screen'}>
                <Route exact path="/" component={Login} />
                <Route path="/home" component={Home} />

            </div>
        </Router>


);
export  default App;