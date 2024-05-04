const { response } = require('express');

const Course = require('../models/Course');
//const Student = require('../models/Student')

const createCourse = async (req, res = response) => {

    const course = new Course(req.body);

    try {

        course.teacher = req.uid;

        const courseDB = await course.save();

        res.status(201).json({
            ok: true,
            course: courseDB
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor, hable con el administrador'
        });

    }

}

const getCourses = async (req, res = response) => {

    const courses = await Course.find()
                                .populate('teacher', 'name')
                                .populate('students', 'name lastname');
    
    try {

        res.json({
            ok: true,
            courses
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor, hable con el administrador'
        });
    }
}

const  getCoursesById = async (req, res = response) => {
    
        const courseId = req.params.id;
    
        try {
    
            const course = await Course.findById(courseId)
                                    .populate('teacher', 'name')
                                    .populate('students', 'name lastname');
            
            if(!course){
                return res.status(404).json({
                    ok: false,
                    msg: 'Curso no encontrado por ese id'
                })
            }
    
            res.json({
                ok: true,
                course
            });
            
        } catch (error) {
            console.log(error);
            res.status(500).json({
                ok: false,
                msg: 'Por favor, hable con el administrador'
            });
        }
}

const getStudentsByCourse = async (req, res = response) => {
    try {
        const courseId = req.params.id;
        const course = await Course.findById(courseId).populate('students', 'name lastname');

        if(!course){
            return res.status(404).json({
                ok: false,
                msg: 'Curso no encontrado por ese id'
            })
        }

        res.json({
            ok: true,
            students: course.students
        })
    } catch (error) {
        
    }
}

const updateCourses = async(req, res = response) =>{
    const courseId = req.params.id;

    try {

        const course = await Course.findById(courseId);

        if(!course){
            return res.status(404).json({
                ok: false,
                msg: 'Curso no encontrado por ese id'
            })
        }

        const newCourse = {
            ...req.body,
            course: req.uid
        }

        const courseUpdate = await Course.findByIdAndUpdate(courseId, newCourse, {new: true});

        res.json({
            ok: true,
            course: courseUpdate
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor, hable con el administrador'
        });
    }

}

const deleteCourse = async (req, res = response) =>{

    const courseId = req.params.id;
    //const uid = req.uid;

    try {

        const course = await Course.findById(courseId);

        if(!course){
            return res.status(404).json({
                ok: false,
                msg: 'Curso no encontrado por ese id'
            })
        }

        await Course.findByIdAndDelete(courseId);

        res.json({
            ok: true,
            msh: 'Curso eliminado correctamente'
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
    createCourse,
    getCourses,
    getCoursesById,
    getStudentsByCourse,
    updateCourses,
    deleteCourse
}