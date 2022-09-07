import './App.css';
import Login from './components/Login';

import Profile from './components/Profile';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoutes from './components/context/ProtectedRoutes';
import Navbar from './components/Navbar';
import Signin from "./components/Signin";

function App() {


  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;