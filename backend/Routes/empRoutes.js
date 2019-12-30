const express = require('express');
const Employee = require('../Model/emp');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('emp section');
    const empList = Employee.find().then(data => {
        res.json(data);
    }).catch(err => {
        res.json({message: err});
    });
});

module.exports = router;