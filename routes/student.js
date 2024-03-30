/*
    Rutas de estudiantes / Student
    host + /api/student

*/

//Falta validar el token en todas las rutas

const { Router } = require('express');
const { fieldValidators } = require('../middlewares/field-validators');
const { check } = require('express-validator');
const {validateJWT} = require('../middlewares/validate-jwt');

const { createStudent, getStudents, updateStudents, deleteStudent } = require('../controllers/student')

const router = Router();

//Todas las rutas deben pasar por la validación del token
router.use(validateJWT);

router.get('/', getStudents);

router.post(
    '/',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('lastname', 'El apellido es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        fieldValidators
    ],
    createStudent);

router.put(
    '/:id',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('lastname', 'El apellido es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        fieldValidators
    ],
    updateStudents);

router.delete('/:id', deleteStudent);

module.exports = router;