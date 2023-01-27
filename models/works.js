const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
    workID: {
        type: "String",
        required: true
    },
    employerUsername: {
        type: "String",
        required: true
    },
    workerUsername: {
        type: "Array",
        required: true
    },
    category: {
        type: "String",
        required: true
    },
    salary: {
        type: "String",
        required: true
    },
    duration: {
        type: "String",
        required: true
    },
    location: {
        type: "String",
        required: true
    },
    bio: {
        type: "String",
        required: true
    },
    applications: {
        type: "Array",
        required: true
    }
});

const Work = mongoose.model("Work", workSchema);

module.exports = Work;