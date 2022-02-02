import './App.css';
import React from 'react'
import { Route, Routes }from 'react-router-dom'
import Login from './Components/Login';
import Register from './Components/Register';
import Header from "./Components/Header";
import Home from "./Components/Home";
import Classes from "./Components/Classes";
import ErrorPage from "./Components/ErrorPage";
import {
    ClassesPrivateRoute
} from './Components/PrivateRoute';

// TODO: We need to think about how you want to handle clients making a reservation for a class

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route exact path='/classes' element={<ClassesPrivateRoute />}>
                <Route path='' element={<Classes />} />
            </Route>
            <Route path='/classes' element={<Classes/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    </div>
  );
}

export default App;
