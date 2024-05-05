import { useState } from "react";
import Header from "./components/Header/Header";
import Inicio from "./components/Inicio/Inicio";
import { Servicios } from "./components/Servicios/Servicios";
import Footer from "./components/Footer/Footer";
import Sugerencias from "./components/Sugerencias";
import { BrowserRouter, Routes, Router, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
<Header/>

<BrowserRouter>
<Routes>
<Route path= "/" element={<Inicio/>}/>
<Route path= "/servicio" element={<Servicios/>}/>
<Route path= "/sugerencias" element={<Sugerencias/>}/>
</Routes>
</BrowserRouter>

<Footer />
    </>
  );
}

export default App;
