import { useState } from "react";
import Header from "./components/Header/Header";
import Inicio from "./components/Inicio/Inicio";
import { Servicios } from "./components/Servicios/Servicios";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header
        lista={[
          "INICIO ",
          "SERVICIOS ",
          "BENEFICIOS ",
          "TIPOS DE PAGINAS ",
          "TRABAJOS REALIZADOS",
          "CONTACTOS",
        ]}
      />
      <Inicio />
      <Servicios />
      <Footer />
    </>
  );
}

export default App;
