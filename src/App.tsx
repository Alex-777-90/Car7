import React from 'react';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import {CSSGlobal} from "./CSSGlobal";

//pages
import Home from "./pages/Home/home";

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
                  </Routes>
              <Footer/>    
          </BrowserRouter>
      </div>
  );
}

export default App;
