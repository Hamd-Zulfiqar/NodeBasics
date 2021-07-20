const student = require('../controllers/student');

const express = require('express');
const route = express.Router();

route.get('/all', student.getStudents);

route.get('/one/:name', student.getStudent);

module.exports = route;