import './App.css';
import Dashboard from './components/Dashboard'; <<
<<
<< < HEAD
import Login from './components/Login';
import Register from './components/Register';

import ChooseProfilePicturePage from './components/ChooseProfilePicturePage';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



===
===
=
import Login from "./components/Login";

// import ChooseProfilePicturePage from  './screens/ChooseProfilePicturePage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ChooseProfilePicturePage from './components/ChooseProfilePicturePage';

>>>
>>>
> 2970e4134 d18a1d99c306aff9e36af75f6b4e31c

function App() {
    return ( <
        div className = "wrapper" >
        <
        Router >
        <
        Switch >
        <
        Route path = '/'
        component = { Dashboard }
        exact / >
        <
        Route path = "/login"
        component = { Login }
        exact / >
        <<
        <<
        << < HEAD <
        Route path = "/register"
        component = { Register }
        exact / >



        ===
        ===
        = >>>
        >>>
        > 2970e4134 d18a1d99c306aff9e36af75f6b4e31c <
        /Switch> < /
        Router > { /* <ChooseProfilePicturePage /> */ } <
        ChooseProfilePicturePage / >
        <
        /div>
    );
}

export default App;