import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './home/Login';
import Dashboard from './home/Dashboard';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
    </Routes>
  );
}

export default App;
