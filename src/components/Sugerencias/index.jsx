import React, { useState } from 'react';
import SugerenciasCards from './Cards';
import './index.css'

export default function Sugerencias() {
    const [comentarios, setComentarios] = useState('');
    const [comentariosPublicados, setComentariosPublicados] = useState([]);

    const handleClickPublicar = () => {
        const nuevoComentario = document.getElementById('comentarios').value;
        if(nuevoComentario.trim().length >= 20){
            setComentariosPublicados([...comentariosPublicados, nuevoComentario]);
            document.getElementById('comentarios').value = '';
        } else {
            alert("El comentario debe tener al menos 20 caracteres")
        }
    };

    return (
        <div className="d-flex justify-content-center flex-column align-items-center my-5" style={{
            minHeight: '70vh',
        }}>
            <h3 style={{fontSize: '40px'}}>Sugerencias</h3>
            <p className='text-center pt-3 px-3'>¿Quieres dejar algún comentario? ¡Tu opinión también importa!</p>
            <div className='d-flex flex-column'>
                <textarea 
                    name="comentarios" 
                    id="comentarios" 
                    cols="60" 
                    rows="5"
                    value={comentarios}
                    onChange={(e) => setComentarios(e.target.value)}
                ></textarea>
                <button className="btn btn-primary my-3" type="button" onClick={handleClickPublicar} style={{
                    backgroundColor: '#a072f9',
                    border: '1px solid #a072f9',
                    borderRadius: '30px',
                }}>Publicar</button>
            </div>
            <div className='d-flex flex-row flex-wrap justify-content-center'>
            {comentariosPublicados.map((comentario, index) => (
                <SugerenciasCards key={index} content={comentario}/>
            ))}
            <SugerenciasCards  content="Superaron todas mis expectativas. La atención al cliente fue excepcional y me guiaron en cada paso del proceso. Además, la plataforma es muy completa y me ha ayudado a optimizar mis procesos de trabajo de manera significativa." />
            <SugerenciasCards  content="Desde que empecé a usar este servicio web, he notado una mejora significativa en la productividad de mi equipo. La interfaz es fácil de entender y las actualizaciones constantes agregan aún más valor. ¡Definitivamente una herramienta indispensable para cualquier empresa!" />
            <SugerenciasCards  content="No sólo la página web quedo linda estéticamente, también me ayudaron a que sea visible para mis clientes, mi negocio creció desde entonces." />
            </div>
        </div>
    );
}
