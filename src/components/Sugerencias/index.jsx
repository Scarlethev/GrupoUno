import React, { useState } from 'react';
import SugerenciasCards from './Cards';

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
        <div className="d-flex justify-content-center flex-column align-items-center">
            <h3>Sugerencias</h3>
            <p>¿Quieres dejar algún comentario? ¡Tu opinión también importa!</p>
            <div className='d-flex flex-column'>
                <textarea 
                    name="comentarios" 
                    id="comentarios" 
                    cols="60" 
                    rows="5"
                    value={comentarios}
                    onChange={(e) => setComentarios(e.target.value)}
                ></textarea>
                <button className="btn btn-primary my-3" type="button" onClick={handleClickPublicar}>Publicar</button>
            </div>
            <div className='d-flex flex-row flex-wrap justify-content-center'>
            {comentariosPublicados.map((comentario, index) => (
                <SugerenciasCards key={index} content={comentario}/>
            ))}
            </div>
        </div>
    );
}
