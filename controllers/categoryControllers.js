const Category = require('../models/categories');

const getCategory = (req, res) => {
    Category.find()
        .then((data) => {
            console.log(data);
            res.send(data);
        })
};

module.exports.getCategory = getCategory;