/*
    Rutas para cursos / Course
    host + /api/course
 */

const { Router } = require('express');
const { fieldValidators } = require('../middlewares/field-validators');
const { check } = require('express-validator');
const {validateJWT} = require('../middlewares/validate-jwt');

const {createCourse, getCourses, getCoursesById, getStudentsByCourse, updateCourses, deleteCourse} = require('../controllers/course')


const router = Router();

//Pasando todas las rutas por la validación del token
router.use(validateJWT);


router.get('/', getCourses);

router.get('/:id', getCoursesById);

router.get('/:id/students', getStudentsByCourse);

router.post(
    '/',
    [
        check('name', 'El nombre del curso es obligatorio').not().isEmpty(),
        check('schedule', 'El horario del curso es obligatorio').not().isEmpty(),
        fieldValidators
    ], 
    createCourse);

router.put(
    '/:id',
    updateCourses);

router.delete('/:id', deleteCourse);

module.exports = router;