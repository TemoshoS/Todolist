import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import {useState} from 'react'
import TodoList from './Components/display';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {





  return (
    <div className="App">  
   
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>

          <Route path='/todo' element={<TodoList/>}/>
          <Route path='/home'  element={<Home />}/>
          
        </Routes>
      </BrowserRouter>
      
      

    </div>
  );
}

export default App;
