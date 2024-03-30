
/*
    Rutas de materias / Subject
    host + /api/subject
 */

const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'get subject'
    })
});

router.post('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'create subject'
    })
});

router.put('/:id', (req, res) => {
    res.json({
        ok:true,
        msg:'update subject'
    })
});

router.delete('/:id', (req, res) => {
    res.json({
        ok:true,
        msg:'delete subject'
    })
});

module.exports = router;