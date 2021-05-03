const express = require('express');
const routes = express.Router();

const students = [
    {id: 1, name: 'austin', grade: 'A'},
    {id: 2, name: 'james', grade: 'B'},
    {id: 3, name: 'sally', grade: 'A'},
];

routes.get('/students', (req, res) => {
    res.send(students);
});

routes.get('/students/:name', (req, res) => {
    const student = students.find(student => student.name === req.params.name);
    res.send(student);
});

routes.get('/students-limited', (req, res) => {
    const studentsToReturn = students.slice(0, parseInt(req.query.limit));
    res.send(studentsToReturn);
});

routes.post('/students', (req, res) => {
    const newId = students[students.length - 1].id + 1;
    const student = {
        id: newId,
        name: req.body.name,
        grade: req.body.grade
    }
    students.push(student);
    res.sendStatus(201);
});

module.exports = routes;