import { useState } from "react";
import Header from "./components/Header/Header";
import Inicio from "./components/Inicio/Inicio";
import { Servicios } from "./components/Servicios/Servicios";
import Footer from "./components/Footer/Footer";
import Sugerencias from "./components/Sugerencias";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
   <Header lista={["INICIO ", "SERVICIOS ", "BENEFICIOS ", "SUGERENCIAS", "TRABAJOS REALIZADOS", "CONTACTOS"]}/>
   <Inicio/>
   <Servicios/>
   <Sugerencias/>
   <Footer/>
    </>
  );
}

export default App;
