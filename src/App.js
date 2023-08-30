import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './home/Login';
import Dashboard from './home/Dashboard';
import PrivateRoute from './components/ProtectedRoute';
import { AuthenticUser } from './context/AuthContext';
function App() {
  return (
    <AuthenticUser>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/' element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </AuthenticUser>
  );
}

export default App;
