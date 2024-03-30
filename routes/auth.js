/*
    Rutas de Usuarios / Auth
    host + /api/auth

*/

const { Router } = require('express');
const { check } = require('express-validator');
const {validateJWT} = require('../middlewares/validate-jwt');

const { createUser, loginUser, renewToken } = require('../controllers/auth');
const {fieldValidators} = require('../middlewares/field-validators');

const router = Router();

router.post(
    '/new',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La contraseña debe tener mínimo 6 caracteres').isLength({ min: 6 }),
        fieldValidators
    ],
    createUser
);

router.post('/', loginUser);

router.get('/renew', validateJWT, renewToken)

module.exports = router;