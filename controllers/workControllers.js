const Work = require('../models/works');
const Employer = require('../models/employer');
const Worker = require('../models/workers')

const getWorks = (req, res) => {
    Work.findOne({
        workID: req.params.workID
    }).then((data) => {
        console.log(data);
        res.send(data);
    })
};

const addWork = async (req, res) => {
    try {
        let dataCount = 0;

        await Employer.findOne({
            username: req.body.employerUsername
        }).then((data) => {
            dataCount = data.works.length;
        });

        console.log(dataCount);
        workIDNew = req.body.employerUsername+(dataCount+1).toString();
        console.log(workIDNew);

        var work = new Work({
            employerUsername: req.body.employerUsername,
            workerUsername: [],
            category: req.body.category,
            salary: req.body.salary,
            duration: req.body.duration,
            location: req.body.location,
            bio: req.body.bio,
            applications: [],
            workID: workIDNew
        });

        work.save((err, doc) => {
            if (!err) {
                console.log("done");
            } else {
                console.log(`Error: ${err}`);
            }
        });

        let dataWorks;

        await Employer.findOne({
            username: req.body.employerUsername
        }).then((data) => {
            dataWorks = data.works
        });

        newData = [];

        console.log(dataWorks);
        if (dataWorks != []) {
            dataWorks.forEach(element => {
                console.log(element);
                newData.push(element);
            });
        }
        newData.push(workIDNew);
        console.log(newData);

        await Employer.findOneAndUpdate(
            {username: req.body.employerUsername},
            {
                works: newData
            },
            res.send("done")
        );
    } catch (err) {
        console.log(`Error: ${err}`);
    }
};

const updateWorkers = async (req, res) => {
    try {
        let dataWork;
        console.log(req.body.workID);

        await Work.findOne({
            workID: req.body.workID
        }).then((data) => {
            console.log(data);
            dataWork = data.workerUsername
        });

        newData = [];
        dataWork.forEach(element => {
            newData.push(element);
        });
        newData.push(req.body.workerUsername);
        console.log(newData);

        await Work.findOneAndUpdate(
            {workID: req.body.workID},
            {
                workerUsername: newData
            },
            console.log(`Done ${newData}`)
        );

        let dataWorker; 
        console.log(req.body.workID);

        await Worker.findOne({
            username: req.body.workerUsername
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
            {username: req.body.workerUsername},
            {
                experience: newData
            },
            res.send("done")
        );
    } catch (err) {
        console.log(`Error: ${err}`);
    }
}

const updateApplication = async (req, res) => {
    try {
        let dataWorks;

        await Worker.findOne({
            username: req.params.username
        }).then((data) => {
            datas = data.applications;
            datas.forEach(element => {
                if (element[0] == req.body.workID) {
                    res.send("applied");
                    return;
                }
            });
            dataWorks = datas;
        });

        newData = [];
        dataWorks.forEach(element => {
            newData.push(element);
        });
        newData.push(req.body.workID);
        console.log(newData);

        await Worker.findOneAndUpdate(
            {username: req.params.username},
            {
                applications: newData
            },
            console.log(`Done: ${newData}`)
        );

        await Work.findOne({
            workID: req.body.workID
        }).then((data) => {
            dataWorks = data.applications
        });

        newData = [];
        dataWorks.forEach(element => {
            newData.push(element);
        });
        newData.push(req.params.username);
        console.log(newData);

        await Work.findOneAndUpdate(
            {workID: req.body.workID},
            {
                applications: newData
            },
            res.send("done")
        );
    } catch (err) {
        console.log(`Error: ${err}`);
    }
}

const getCategoryWorks = (req, res) => {
    Work.find({
        category: req.params.category
    }).then((data) => {
        console.log(data);
        res.send(data);
    })
}

const getApplications = (req, res) => {
    Work.findOne({
        workID: req.params.workID
    }).then((data) => {
        console.log(data);
        res.send(data);
    })
}

module.exports.getWorks = getWorks;
module.exports.addWork = addWork;
module.exports.updateWorkers = updateWorkers;
module.exports.getCategoryWorks = getCategoryWorks;
module.exports.getApplications = getApplications;
module.exports.updateApplication = updateApplication;