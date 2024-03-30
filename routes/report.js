/*
    Rutas para informes / Report
    host + /api/report
 */

    const { Router } = require('express');

    const router = Router();

    router.get('/', (req, res) => {
        res.json({
            ok: true,
            msg: 'get report'
        })
    });
    
    router.get('/:id_student', (req, res) => {
        res.json({
            ok: true,
            msg: 'get report by student'
        })
    });
    
    router.post('/', (req, res) => {
        res.json({
            ok: true,
            msg: 'create report'
        })
    });
    
    router.put('/:id', (req, res) => {
        res.json({
            ok: true,
            msg: 'update report'
        })
    });
    
    router.delete('/:id', (req, res) => {
        res.json({
            ok: true,
            msg: 'delete report'
        })
    });
    
    module.exports = router;