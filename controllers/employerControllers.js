const Employer = require('../models/employer');

const getEmployer = (req, res) => {
    Employer.findOne({
        username: req.params.username,
        password: req.body.password
    }).then((data) => {
        console.log(data);
        res.send(data);
    })
};

const getLogin = (req, res) => {
    Employer.findOne({
        username: req.params.username,
        password: req.body.password
    }).then((data) => {
        if (data == null) {
            res.send("notfound");
        } else {
            res.send("found");
        }
    })
};

const addEmployer = async (req, res) => {
    try {
        Employer.findOne({
            username: req.body.username
        }).then((data) => {
            console.log(data);
            if (data == null) {
                var employer = new Employer({
                    name: req.body.name,
                    works: [],
                    phone: req.body.phone,
                    email: req.body.email,
                    password: req.body.password,
                    username: req.body.username
                });

                employer.save((err, doc) => {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send("done");
                    }
                });
            } else {
                // console.log("User already exsists");
                res.send("nameExsist");
            }
        }); 
    } catch (err) {
        console.log(`Error: ${err}`)
    }
}

const updateWorks = async (req, res) => {
    try {
        let dataWorks;

        await Employer.findOne({
            username: req.body.username
        }).then((data) => {
            dataWorks = data.works
        });

        newData = [];

        console.log(dataWorks);
        dataWorks.forEach(element => {
            console.log(element);
            newData.push(element);
        });
        newData.push(req.body.workID);
        console.log(newData);

        await Employer.findOneAndUpdate(
            {username: req.body.username},
            {
                works: newData
            },
            res.send(`Done: ${newData}`)
        );
    } catch (err) {
        console.log(`Error: ${err}`);
    }
} 

module.exports.getEmployer = getEmployer;
module.exports.addEmployer = addEmployer;
module.exports.updateWorks = updateWorks;
module.exports.getLogin = getLogin;