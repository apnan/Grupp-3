import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import ChooseProfilePicturePage from './screens/ChooseProfilePicturePage';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Route path ='/' component={Dashboard} exact/>
          <Route path="/login" component={Login}  exact/> 

          
        
        </Switch>
      </Router>
      <ChooseProfilePicturePage />
    </div>
  );
}

export default App;
