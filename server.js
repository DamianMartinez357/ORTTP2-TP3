import express from 'express'
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//DATOS

const libros = [

    {id:'1', titulo: 'Cien años de Soledad', autor: 'Garcia Marquez', año:'1998'},
    {id:'2', titulo: 'La Guerra Invisible', autor: 'Marcelo Larraquy', año:'2021'},
    {id:'3', titulo: 'Heroes de Malvinas', autor: 'Nicolas Kasanzew', año:'1990'},
    {id:'4', titulo: 'Regreso al Futuro', autor: 'Robert Zemekis', año:'1985'},
    {id:'5', titulo: 'Malvinas La Historia', autor: 'Guillermo Jofre', año:'2015'},
]


//GET DE LIBROS TOTAL O POR ID

app.get('/catalogo/:id?',(req,res) => {
    const {id} = req.params
    res.json(id? libros.find(libro => libro.id == id) : libros)
})


//POST DE LIBROS

app.post('/catalogo',(req,res) => {
    const libro = req.body
    const id = parseInt(libros[libros.length-1].id)+1
    libro.id = String(id)
    libros.push(libro)
    res.json(libro) 
})


// CONFIGURACION SERVIDOR

const PUERTO = 8080
const SERVER = app.listen(PUERTO, () => console.log(`** Servidor express habilitado - Puerto:  ${PUERTO} **`))
SERVER.on('error',error => console.log(`Error en el servidor: ${error.message}`))






