//const Student = require('../models/student');
const {studenttb} = require('../models');


const createStudent = async (req, res) => {
    try{
        const {name, fathername, classno} = req.body;
        const user = await studenttb.create({name,fathername,classno});
        
        res.json(user);
        res.statusCode(200);
        res.end();
    }
    catch(exception){
        res.json({success: false, message: "Failed to create student"});
        res.statusCode(505);
        res.end();
    }
}

const getStudents = async (req, res) => {
    try {
        const users = await studenttb.findAll();

        res.json({success: true, message: "Students retrieved!", data: users});
        res.statusCode(200);
        return res.end();
    } catch (error) {
        res.json({success: false, message: "Error!"});
        //res.statusCode(404);
        res.end();
    }
}

const getStudent = (req, res) => {
    students.forEach((student, index) => {
        if(student.name == req.params.name){
            res.json(JSON.parse(JSON.stringify(students[index])));
            res.statusCode = 200;
            res.end();
            return;
        }
    })
    res.json({
        success: false,
        message: 'Student not found!'
    });
    res.statusCode = 404;
    res.end();
}

module.exports.getStudents = getStudents;
module.exports.getStudent = getStudent;
module.exports.createStudent = createStudent;