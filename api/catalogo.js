import model from '../model/catalogo.js'

const obtenerLibros = id =>{
    return id? model.buscarLibro(id) : model.buscarLibros()
}

const guardarLibro = libro => {
    return model.guardarLibro(libro)
}

const actualizarLibro = (libro,id) => {
     return model.actualizarLibro(libro,id)
}

const borrarLibro = id => {
    return model.borrarLibro(id)
}

export default{
    obtenerLibros,
    guardarLibro,
    actualizarLibro,
    borrarLibro
}