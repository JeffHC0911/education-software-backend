// const { response } = require('express');

// const Subject = require('../models/Subject');

// const createSubject = async (req, res = response) => {

//     const subject = new Subject(req.body);

//     try {

//         const subjectDB = await subject.save();

//         res.status(201).json({
//             ok: true,
//             subject: subjectDB
//         });

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             ok: false,
//             msg: 'Por favor, hable con el administrador'
//         });

//     }

// }

// const getSubjects = async (req, res = response) => {

//     const subjects = await Subject.find()
//                                 .populate('teacher', 'name')
//                                 .populate('students', 'name');
    
//     try {

//         res.json({
//             ok: true,
//             subjects
//         });
        
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             ok: false,
//             msg: 'Por favor, hable con el administrador'
//         });
//     }
// }

// const updateSubjects = async(req, res = response) =>{
//     const subjectId = req.params.id;

//     try {

//         const subject = await Subject.findById(subjectId);

//         if(!subject){
//             return res.status(404).json({
//                 ok: false,
//                 msg: 'Curso no encontrado por ese id'
//             })
//         }

//         const newSubject = {
//             ...req.body,
//             subject: req.uid
//         }

//         const subjectUpdate = await Subject.findByIdAndUpdate(subjectId, newSubject, {new: true});

//         res.json({
//             ok: true,
//             subject: subjectUpdate
//         })
        
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             ok: false,
//             msg: 'Por favor, hable con el administrador'
//         });
//     }

// }

// const deleteSubject = async (req, res = response) =>{

//     const subjectId = req.params.id;
//     //const uid = req.uid;

//     try {

//         const subject = await Subject.findById(subjectId);

//         if(!subject){
//             return res.status(404).json({
//                 ok: false,
//                 msg: 'Curso no encontrado por ese id'
//             })
//         }

//         await Subject.findByIdAndDelete(subjectId);

//         res.json({
//             ok: true,
//             msh: 'Curso eliminado correctamente'
//         })
        
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             ok: false,
//             msg: 'Por favor, hable con el administrador'
//         });
//     }
// }

// module.exports = {
//     createSubject,
//     getSubjects,
//     updateSubjects,
//     deleteSubject
// }