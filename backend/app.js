const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Emp = require('./Routes/empRoutes');
const app = express();
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('welcome');
})

app.use('/emp', Emp);

mongoose.connect('mongodb://localhost/employees',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('Connected to db');
});

app.listen(3000);