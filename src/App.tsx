import React from 'react';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import {CSSGlobal} from "./CSSGlobal";

//pages
import Home from "./pages/Home/home";
import About from "./pages/About/About";
import Register from './pages/Register/Register';

// components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  
  return (
      <div className="App">
        <CSSGlobal/>
          <BrowserRouter>
              <Header/>
                  <Routes>
                       <Route path='/' element ={<Home/>}/>
                       <Route path='/about' element ={<About/>}/>
                       <Route path='/register' element ={<Register/>}/>
                  </Routes>
              <Footer/>    
          </BrowserRouter>
      </div>
  );
}

export default App;
