import './App.css';
// import Dashboard from './components/Dashboard';
import Register from './components/Register'
import Login from './components/Login';
// import Gameapp from './components/Gameapp';
// import ScoreBoard from './components/ScoreBoard';
import Profile from './components/Profile';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoutes from './components/context/ProtectedRoutes';
import Navbar from './components/Navbar';

function App() {


  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;