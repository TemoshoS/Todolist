import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {





  return (
    <div className="App">  
   
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>


          <Route path='/home'  element={<Home />}/>
          
        </Routes>
      </BrowserRouter>
      
      

    </div>
  );
}

export default App;
