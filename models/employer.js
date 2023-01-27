const mongoose = require('mongoose');

const employerSchema = new mongoose.Schema({
    name: {
        type: "String",
        required: true
    },
    works: {
        type: "Array",
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
    }
});

const Employer = mongoose.model("Employer", employerSchema);

module.exports = Employer;