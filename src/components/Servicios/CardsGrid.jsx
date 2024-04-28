import { CardsComponent } from "../Servicios/CardsComponent";

import React from "react";

export const CardsGrid = () => {
  return (
    <div
      className="container-fluid "
      style={{
        background: "linear-gradient(to right, orange, violet, pink, blue)",
      }}
    >
      <div className="row justify-content-center">
      <h1 className="mb-8 text-center" style={{ fontWeight: "bold", letterSpacing: "2px" }}>¿Qué ofrecemos?</h1> 
        <CardsComponent
          title="Desarrollo de Sitios Web a medida"
          text="Nos especializamos en crear sitios web personalizados, con cada línea de código diseñada con precisión para cumplir tus necesidades específicas. Desde la idea hasta la ejecución, estamos comprometidos a desarrollar experiencias digitales excepcionales que impulsen tu éxito en línea."
          image="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600"
        />

        <CardsComponent
          title="Mantenimiento y Soporte"
          text="Mantenimiento y Soporte Personalizado: Nos dedicamos a brindar servicios especializados para garantizar el rendimiento óptimo de tu sitio web en todo momento. Nuestro enfoque personalizado se adapta a tus necesidades específicas, ofreciendo actualizaciones regulares, resolución de problemas y respaldo técnico para asegurar un rendimiento continuo."
          image="https://images.pexels.com/photos/5380655/pexels-photo-5380655.jpeg?auto=compress&cs=tinysrgb&w=600"
        />

        <CardsComponent
          title="Optimizacion SEO"
          text="Optimización SEO Personalizada: Valoramos la visibilidad en línea y ofrecemos servicios especializados en SEO para posicionar tu sitio web en los primeros resultados. Nuestro enfoque estratégico y adaptado amplía tu alcance, aumenta el tráfico orgánico y potencia tu presencia en línea."
          image="https://images.pexels.com/photos/5926380/pexels-photo-5926380.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>
    </div>
  );
};
