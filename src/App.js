import './App.css';
import Dashboard from './components/Dashboard'; 
import Login from './components/Login';
import Register from './components/Register';
import ChooseProfilePicturePage from './components/ChooseProfilePicturePage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return ( <
        div className = "wrapper">
        <Router>
        <Switch>
        <Route path = '/'
        component = { Dashboard }
        exact / >
        <Route path = "/login"
        component = { Login }
        exact / >
        <Route path = "/register"
        component = { Register }
        exact / >
        </Switch> </Router> { /* <ChooseProfilePicturePage /> */ } <
        ChooseProfilePicturePage / >
        </div>
    );
}

export default App;