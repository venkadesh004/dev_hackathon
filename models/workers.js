const mongoose = require('mongoose');

const workerScheme = new mongoose.Schema({
    name: {
        type: "String",
        required: true
    },
    dob: {
        type: "String",
        required: true
    },
    experience: {
        type: "Array",
        required: true
    },
    address: {
        type: "String",
        required: true
    },
    phone: {
        type: "String",
        required: true
    },
    email: {
        type: "String",
        required: true
    },
    password: {
        type: "String",
        required: true
    },
    username: {
        type: "String",
        required: true
    },
    applications: {
        type: "Array",
        required: true
    }
});

const Worker = mongoose.model("Workers", workerScheme);

module.exports = Worker;