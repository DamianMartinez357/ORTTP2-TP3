import express from 'express'
import routerCatalogo from './router/catalogo.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.use('/catalogo',routerCatalogo)

// CONFIGURACION SERVIDOR

const PUERTO = 8080
const SERVER = app.listen(PUERTO, () => console.log(`** Servidor express habilitado - Puerto:  ${PUERTO} **`))
SERVER.on('error',error => console.log(`Error en el servidor: ${error.message}`))






