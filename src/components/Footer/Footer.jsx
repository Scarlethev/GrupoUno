import './footer.css'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const redesSociales = [
        { name: 'Facebook', icon: <FaFacebookF />, url: 'https://www.facebook.com' },
        { name: 'LinkedIn', icon: <FaLinkedinIn />, url: 'https://www.linkedin.com' },
        { name: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com' }
    ];

    const renderRedesSociales = redesSociales.map((red, index) => (
        <li key={index}>
            <a href={red.url} target="_blank" rel="noopener noreferrer" className='ancla-menu'>
                {red.icon}
            </a>
        </li>
    ));

    return (
        <>
            <ul className='menu-footer'>
                {renderRedesSociales}
            </ul>
            <p className="leyenda">© {new Date().getFullYear()} Todos los derechos reservados</p>
        </>
    );
}

export default Footer;