import express from 'express'
import controller from '../controller/catalogo.js'
const router = express.Router()

//GET DE LIBROS TOTAL O POR ID
router.get('/:id?',controller.getLibros)
//POST DE LIBROS
router.post('/',controller.postLibro)
//PUT TOTAL DE UN LIBRO
router.put('/:id',controller.putLibro)
//DELETE DE UN LIBRO
router.delete('/:id',controller.deleteLibro)

export default router