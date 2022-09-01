import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Gameapp from './components/Gameapp';
import ScoreBoard from './components/ScoreBoard';
import ChooseProfilePicturePage from './components/ChooseProfilePicturePage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
      <Gameapp/>
      <ScoreBoard/>
      <ChooseProfilePicturePage />
    </div>
  );
}

export default App;