import './App.css';
import React from 'react'
import { Route, Routes }from 'react-router-dom'
import Login from './Components/Login';
import Register from './Components/Register';
import Header from "./Components/Header";
import Home from "./Components/Home";
import Classes from "./Components/Classes";


function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path='/classes' element={<Classes/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;
