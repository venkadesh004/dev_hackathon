const Worker = require('../models/workers');

const getWorker = (req, res) => {
    Worker.findOne({
        username: req.params.username
    }).then((data) => {
        console.log(data);
        res.send(data);
    })
};

const getLogin = (req, res) => {
    Worker.findOne({
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

const addWorker = async (req, res) => {
    try {
        Worker.findOne({
            username: req.body.username
        }).then((data) => {
            console.log(data);
            if (data == null) {
                var worker = new Worker({
                    name: req.body.name,
                    dob: req.body.dob,
                    experience: [],
                    address: req.body.address,
                    phone: req.body.phone,
                    email: req.body.email,
                    password: req.body.password,
                    username: req.body.username,
                    applications: []
                });
        
                worker.save((err, doc) => {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send("done");
                    }
                });
            } else {
                console.log("nameExsist");
                res.send("nameExsist");
            }
        })
    } catch (err) {
        console.log(`Error ${err}`);
    }
}

const updateExperience = async (req, res) => {
    try {
        let dataWorker; 
        console.log(req.body.workID);

        await Worker.findOne({
            username: req.body.username
        }).then((data) => {
            dataWorker = data.experience;
        });

        newData = [];

        console.log(dataWorker);
        dataWorker.forEach(element => {
            console.log(element);
            newData.push(element);
        });
        newData.push(req.body.workID);
        console.log(newData);

        await Worker.findOneAndUpdate(
            {username: req.body.username},
            {
                experience: newData
            },
            res.send(`Done: ${newData}`)
        );
    } catch (err) {
        console.log(`Error: ${err}`);
    }
}

module.exports.getWorker = getWorker;
module.exports.addWorker = addWorker;
module.exports.updateExperience = updateExperience;
module.exports.getLogin = getLogin;