import { useState } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Inicio from './Inicio.jsx'
import Servicios from './Servicios.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header lista={["INICIO ", "SERVICIOS ", "BENEFICIOS ", "TIPOS DE PAGINAS ", "TRABAJOS REALIZADOS", "CONTACTOS"]}/>
   <Inicio/>
   <Servicios/>
   <Footer/>
    </>
  )
}

export default App
