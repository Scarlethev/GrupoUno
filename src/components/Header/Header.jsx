import "./header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const lista = [
    { name: "Inicio", url: "/" },
    { name: "Servicios", url: "/servicios" },
    { name: "Sugerencias", url: "/sugerencias" },
  ];

  let ul = lista.map((item, index) => (
    <li key={index}>
      <Link to={item.url} className="ancla-menu" onClick={() => setIsOpen(false)}>
        {item.name}
      </Link>
    </li>
  ));

  return (
    <>
      <header className="header">
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>{ul}</ul>
      </header>
    </>
  );
};

export default Header;
