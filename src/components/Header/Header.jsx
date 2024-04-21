import './header.css'

const Header=({lista})=>{

    let ul=lista.map(item=><a className='ancla-menu'><li>{item}</li></a>)


    return(
        <>
        <ul>{ul}</ul>
        </>

    )

    }

    export default Header;

