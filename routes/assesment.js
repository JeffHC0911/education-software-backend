/*
    Rutas de evaluaciones / assesment
    host + /api/assesment
 */


const { Router } = require('express');
const {fieldValidators} = require('../middlewares/field-validators');
const {validateJWT} = require('../middlewares/validate-jwt');
const {check} = require('express-validator');
const {createAssesment, getAssesments, updateAssesments, deleteAssesment} = require('../controllers/assesment')


const router = Router();

//Todas las rutas pasarán por la validación del token
router.use(validateJWT);

router.get('/', getAssesments);

router.post(
    '/',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('weighted', 'El peso es obligatorio').not().isEmpty(),
        check('course', 'El curso es obligatorio').not().isEmpty(),
        //check('grades', 'La calificación es obligatoria').not().isEmpty(),
        fieldValidators
    ], 
    createAssesment);

router.put('/:id', updateAssesments);

router.delete('/:id', deleteAssesment);

module.exports = router;