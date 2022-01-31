
import './App.css';
import React from 'react'
import { Route, Routes }from 'react-router-dom'
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <div className="App">
        <h1>Anywhere Fitness</h1>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
        </Routes>
    </div>
  );
}

export default App;
