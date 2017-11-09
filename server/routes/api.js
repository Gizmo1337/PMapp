const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/mean', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/users', (req, res) => {
    connection((db) => {
        db.collection('users')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                console.log(users);
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

//get tasks
router.get('/tasks', (req, res) => {
    connection((db) => {
        db.collection('tasks')
            .find({}, {_id : 0})
            .toArray()
            .then((tasks) => {
                response.data = tasks;
                console.log(tasks);
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});


//get test

router.get('/test', (req, res) => {
    connection((db) => {
        db.collection('test')
            .find()
            .toArray()
            .then((test) => {
                response.data = test;
                console.log(test);
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});


//get links
router.get('/links', (req, res) => {
    connection((db) => {
        db.collection('links')
            .find({}, {_id : 0})
            .toArray()
            .then((links) => {
                response.data = links;
                console.log(links);
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

module.exports = router;