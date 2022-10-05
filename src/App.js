import './App.css';

import Settings from './pages/settings/Settings';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoutes from './components/context/ProtectedRoutes';
import Signin from './pages/signin/Signin';
import Login from './pages/login/Login';
import Topbar from './components/topbar/Topbar';
import Homepage from './pages/homepage/HomePage';
import Gameapp from './components/Gameapp';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Topbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/posts" element={<Homepage />} />

        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/gameapp" element={<Gameapp />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/profile" element={<Gameapp/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
