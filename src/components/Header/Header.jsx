import './header.css'

const Header=({lista})=>{

    let ul=lista.map((item, index)=>


    <a className='ancla-menu' key={index}><li>{item}</li></a>)

    return(
        <>
        <ul>{ul}</ul>
        </>

    )

    }

    export default Header;

