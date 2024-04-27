import usuarioImg from '../../../assets/usuario.svg'

export default function SugerenciasCards ({content}){
    return (
        <div className="card p-2 m-3 " style={{maxWidth:'500px'}}>
            <div className='d-flex'>
               <img src={usuarioImg} alt="usuarioImg" style={{width: '20px', alignSelf:'flex-start', margin:'20px 0 0 10px'}}/>
               <div className="card-body">
                 <p className="card-text" style={{width:'405px'}}>{content}</p>
               </div>
            </div>
      </div>
    )
}