const Student = require('../models/student');

//* setting up a static dummy data array to practice
var students = [new Student("Hamd","Zulfiqar",7),
                new Student("Omer","Qazi",5),
                new Student("Qasim","Munir",3),]


const getStudents = (req, res) => {
    res.json(JSON.parse(JSON.stringify(students)));
    res.statusCode = 200;
    res.end();
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