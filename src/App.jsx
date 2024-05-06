import { useState } from "react";
import Header from "./components/Header/Header";
import Inicio from "./components/Inicio/Inicio";
import { Servicios } from "./components/Servicios/Servicios";
import Footer from "./components/Footer/Footer";
import Sugerencias from "./components/Sugerencias";
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
       <BrowserRouter>
          <Header/>
          <Routes>
             <Route path= "/" element={<Inicio/>}/>
             <Route path= "/servicios" element={<Servicios/>}/>
             <Route path= "/sugerencias" element={<Sugerencias/>}/>
          </Routes>
          <Footer />
       </BrowserRouter>
    </>
  );
}

export default App;
