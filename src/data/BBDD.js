const prueba=(nombre)=>{
    console.log(`Hola ${nombre}`)
}

prueba("Scarleth")


const getBbdd=async()=>{

    try{

    let movies= await axios("https://www.themoviedb.org")

        console.log(movies)
    }

    catch(err){
        console.log(err)
    }

}

getBbdd()