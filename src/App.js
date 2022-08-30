import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import ChooseProfilePicturePage from './screens/ChooseProfilePicturePage';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="wrapper">
      {/* <h1>Application</h1> */}
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
      <Login />
      <ChooseProfilePicturePage />
    </div>
  );
}

export default App;
