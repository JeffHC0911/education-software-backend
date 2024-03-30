const { response } = require('express');

const Student = require('../models/Student');

const createStudent = async (req, res = response) => {

    const student = new Student(req.body);

    try {

        const studentDB = await student.save();

        res.status(201).json({
            ok: true,
            student: studentDB
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor, hable con el administrador'
        });

    }

}

const getStudents = async (req, res = response) => {

    const students = await Student.find()
    
    try {

        res.json({
            ok: true,
            students
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor, hable con el administrador'
        });
    }
}

const updateStudents = async(req, res = response) =>{
    const studentId = req.params.id;

    try {

        const student = await Student.findById(studentId);

        if(!student){
            return res.status(404).json({
                ok: false,
                msg: 'Estudiante no encontrado por ese id'
            })
        }

        const newStudent = {
            ...req.body,
            student: req.uid
        }

        const studentUpdate = await Student.findByIdAndUpdate(studentId, newStudent, {new: true});

        res.json({
            ok: true,
            student: studentUpdate
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor, hable con el administrador'
        });
    }

}

const deleteStudent = async (req, res = response) =>{

    const studentId = req.params.id;
    //const uid = req.uid;

    try {

        const student = await Student.findById(studentId);

        if(!student){
            return res.status(404).json({
                ok: false,
                msg: 'Estudiante no encontrado por ese id'
            })
        }

        await Student.findByIdAndDelete(studentId);

        res.json({
            ok: true,
            msh: 'Estudiante eliminado correctamente'
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
    createStudent,
    getStudents,
    updateStudents,
    deleteStudent
}