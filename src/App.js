import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
<<<<<<< HEAD
import ChooseProfilePicturePage from './screens/ChooseProfilePicturePage';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

=======
import ChooseProfilePicturePage from './components/ChooseProfilePicturePage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
>>>>>>> 4d9dd5bd962d3a3044e7b341abf139ba995bd398

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
