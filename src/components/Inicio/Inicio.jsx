import './inicio.css'
import banner from '../../assets/fotobanner.png'

const Inicio = () => {


    return (
        <>
            <section className="inicio">
                <div className='text'>
                    <h1 className='fir-text'>Transformando ideas en experiencias digitales</h1>
                    <p className='parrafo'>Contáctenos y convierta su página web en un reflejo fiel de su identidad y visión</p>
                    <button className='button'><i>¡Quiero mi página web!</i></button>
                </div>
                <img className='img-banner' src={banner} alt="img-banner" />
            </section>

            <section className='textDos'>
                <h1 className='fir-text-textDos'>Desarrollamos</h1>
                <h1 className='sec-text-textDos'>tu sitio web Desde cero.</h1>
                <h5 className='tre-text-textDos'>Te escuchamos y creamos tu sitio web personalizado.</h5>
                <p className='parrafo-textDos'>Creamos la estructura visual, seleccionamos cuidadosamente las imágenes, redactamos los contenidos, programamos con precisión y finalmente, cargamos el resultado en la web. <br/>En Vach Web, nos dedicamos apasionadamente a proporcionar soluciones digitales innovadoras. Nos hemos especializado en el desarrollo personalizado de sitios web. La tecnología es nuestra gran motivación, impulsando cada proyecto que emprendemos.
                    Únete a nosotros en esta travesía, donde la creatividad, la tecnología y la estrategia se encuentran para impulsar tu presencia en línea hacia nuevas alturas.</p>
            </section>
        </>

    )

}

export default Inicio