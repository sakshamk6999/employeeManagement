const mongoose = require('mongoose');

const Employee = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    id:{
        type: Number,
        required: true
    },
    isManager:{
        type: Boolean,
        required: true
    },
    reports: {
        type: [Number],
        required: true
    }
});

module.exports = mongoose.model('Employee', Employee);