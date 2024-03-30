/*
    Rutas de calificaciones / Grade
    host + /api/grade
 */

const { Router } = require('express');
const {validateJWT} = require('../middlewares/validate-jwt');

const {getGrades, createGrade, updateGrades, deleteGrade} = require('../controllers/grade');


const router = Router();

//Todas las rutas deben de pasar por la validación del JWT
router.use(validateJWT);

router.get('/', getGrades);

router.get('/:id', (req, res) => {
    res.json({
        ok: true,
        msg: 'get grade by student'
    })
});

router.post('/', createGrade);

router.put('/:id', updateGrades);

router.delete('/:id', deleteGrade);

module.exports = router;