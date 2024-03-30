const { response } = require('express');

const Assesment = require('../models/Assesment');

const createAssesment = async (req, res = response) => {

    const assesment = new Assesment(req.body);

    try {

        const assesmentDB = await assesment.save();

        res.status(201).json({
            ok: true,
            assesment: assesmentDB
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor, hable con el administrador'
        });

    }

}

const getAssesments = async (req, res = response) => {

    const assesments = await Assesment.find()
        .populate('course', 'name')
        .populate({
            path: 'grades',
            populate: {
                path: 'student',
                select: 'name lastname'
            },
            select: 'value'
        });

    try {

        res.json({
            ok: true,
            assesments
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor, hable con el administrador'
        });
    }
}

const updateAssesments = async (req, res = response) => {
    const assesmentId = req.params.id;

    try {

        const assesment = await Assesment.findById(assesmentId);

        if (!assesment) {
            return res.status(404).json({
                ok: false,
                msg: 'Nota no encontrado por ese id'
            })
        }

        const newAssesment = {
            ...req.body,
            assesment: req.uid
        }

        const assesmentUpdate = await Assesment.findByIdAndUpdate(assesmentId, newAssesment, { new: true });

        res.json({
            ok: true,
            assesment: assesmentUpdate
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor, hable con el administrador'
        });
    }

}

const deleteAssesment = async (req, res = response) => {

    const assesmentId = req.params.id;
    //const uid = req.uid;

    try {

        const assesment = await Assesment.findById(assesmentId);

        if (!assesment) {
            return res.status(404).json({
                ok: false,
                msg: 'Evluación no encontrada por ese id'
            })
        }

        await Assesment.findByIdAndDelete(assesmentId);

        res.json({
            ok: true,
            msh: 'Evaluación eliminado correctamente'
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor, hable con el administrador'
        });
    }
}

module.exports = {
    createAssesment,
    getAssesments,
    updateAssesments,
    deleteAssesment
}