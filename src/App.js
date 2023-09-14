import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthenticUser } from './context/AuthContext';
import AboutUs from './pages/AboutUs';
import Messages from './pages/Messages';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
function App() {
  return (
    <AuthenticUser>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/' element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/settings' element={<Settings />} />
        </Route>
      </Routes>
    </AuthenticUser>
  );
}

export default App;
