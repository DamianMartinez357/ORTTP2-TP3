//DATOS
const libros = [

    {id:'1', titulo: 'Cien años de Soledad', autor: 'Garcia Marquez', año:'1998'},
    {id:'2', titulo: 'La Guerra Invisible', autor: 'Marcelo Larraquy', año:'2021'},
    {id:'3', titulo: 'Heroes de Malvinas', autor: 'Nicolas Kasanzew', año:'1990'},
    {id:'4', titulo: 'Regreso al Futuro', autor: 'Robert Zemekis', año:'1985'},
    {id:'5', titulo: 'Malvinas La Historia', autor: 'Guillermo Jofre', año:'2015'},
]

const buscarLibro = id => {

    return libros.find(libro => libro.id == id)

}
const buscarLibros =  () => {
    return libros
}


const guardarLibro = libro  => {
    const id = parseInt(libros[libros.length-1].id)+1
    libro.id = String(id)
    libros.push(libro)
    return libro
}

const actualizarLibro = (libro,id) => {
    libro.id = id
    const indice = libros.findIndex(libro => libro.id == id)
    libros.splice(indice,1,libro)
    return libro
}

const borrarLibro = id => {
    const indice = libros.findIndex(libro => libro.id == id)
    const libroBorrado = libros[indice]
    libros.splice(indice,1)
    return libroBorrado
}

export default {
    buscarLibro,
    buscarLibros,
    guardarLibro,
    actualizarLibro,
    borrarLibro
}