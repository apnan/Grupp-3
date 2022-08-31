import './App.css' ;
import Dashboard from './components/Dashboard';
import Login from "./components/Login";

// import ChooseProfilePicturePage from  './screens/ChooseProfilePicturePage';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ChooseProfilePicturePage from './components/ChooseProfilePicturePage';


function App() {
  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Route path ='/' component={Dashboard} exact/>
          <Route path="/login" component={Login}  exact/> 
        </Switch>
      </Router>
      {/* <ChooseProfilePicturePage /> */}
      <ChooseProfilePicturePage/>
    </div>
  );
}

export default App;
