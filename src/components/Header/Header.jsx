import './header.css'
import {Link} from 'react-router-dom'


const Header=({})=>{

    const lista =[{name: 'Inicio', url:'/'}, {name: 'Servicios', url: '/servicios'},{name: 'Sugerencias', url: '/sugerencias'}]
    let ul = lista.map((item,index)=>
        (
    <li key={index}><Link to={item.url} className='ancla-menu'>{item.name}</Link></li>
    ))

    return(
        <>
        <ul>{ul}</ul>
        </>

        )
    }

    export default Header;

