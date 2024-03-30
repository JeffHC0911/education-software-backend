const { response } = require('express');

const Grade = require('../models/Grade');

const createGrade = async (req, res = response) => {

    const grade = new Grade(req.body);

    try {

        const gradeDB = await grade.save();

        res.status(201).json({
            ok: true,
            grade: gradeDB
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor, hable con el administrador'
        });

    }

}

const getGrades = async (req, res = response) => {

    const grades = await Grade.find()
        .populate('student', 'name');

    try {

        res.json({
            ok: true,
            grades
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor, hable con el administrador'
        });
    }
}

const updateGrades = async (req, res = response) => {
    const gradeId = req.params.id;

    try {

        const grade = await Grade.findById(gradeId);

        if (!grade) {
            return res.status(404).json({
                ok: false,
                msg: 'Nota no encontrado por ese id'
            })
        }

        const newGrade = {
            ...req.body,
            grade: req.uid
        }

        const gradeUpdate = await Grade.findByIdAndUpdate(gradeId, newGrade, { new: true });

        res.json({
            ok: true,
            grade: gradeUpdate
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor, hable con el administrador'
        });
    }

}

const deleteGrade = async (req, res = response) => {

    const gradeId = req.params.id;
    //const uid = req.uid;

    try {

        const grade = await Grade.findById(gradeId);

        if (!grade) {
            return res.status(404).json({
                ok: false,
                msg: 'Nota no encontrado por ese id'
            })
        }

        await Grade.findByIdAndDelete(gradeId);

        res.json({
            ok: true,
            msh: 'Nota eliminado correctamente'
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
    createGrade,
    getGrades,
    updateGrades,
    deleteGrade
}