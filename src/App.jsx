import { useState } from "react";
import Header from "./components/Header/Header";
import Inicio from "./components/Inicio/Inicio";
import Servicios from "./components/Servicios/Servicios";
import Footer from "./components/Footer/Footer";
import { CardsGrid } from "./components/Servicios/CardsGrid";

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
      {/* <Servicios /> */}
      <CardsGrid />
      <Footer />
    </>
  );
}

export default App;
