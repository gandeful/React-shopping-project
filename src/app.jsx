import  React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => {
    return (

        <div>
            <Link to={'/'}>home</Link>&nbsp;
            <Link to={'/about'}>about</Link>&nbsp;
            <Link to={'/topics'}>topics</Link>
            <h2>Home</h2>
        </div>
    )
};

const About = () => (
    <div>
        <Link to={'/'}>home</Link>&nbsp;
        <Link to={'/about'}>about</Link>&nbsp;
        <Link to={'/topics'}>topics</Link>
        <h2>About</h2>
    </div>
);
const  Topics = () => (
    <div>
        <Link to={'/'}>home</Link>&nbsp;
        <Link to={'/about'}>about</Link>&nbsp;
        <Link to={'/topics'}>topics</Link>
        <h2>Topics</h2>
    </div>
)
const  App = () =>(
        <Router>
            <div>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
            </div>
        </Router>


);
export  default App;