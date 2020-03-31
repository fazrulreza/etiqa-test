const express = require('express');
const bodyParser = require('body-parser');
const PgMainTable = require('./api/model/pg/main_table')

const app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Generic error handler used by all endpoints.
const handleError = (res, reason, message, code) => {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
}

// Get user list
app.get("/api/user", (req, res) => {
    const searchOpts = {
        where: '',
        order: [['username']],
    };

    PgMainTable
        .findAll(searchOpts)
        .then(user => res.status(200).json(user))
        .catch(e => handleError(res, e.message, "Failed to get user list"))
});

// Create new user
app.post("/api/user", (req, res) => {
    const newUser = req.body;
    PgMainTable
        .create(newUser)
        .then(user => res.status(200).json(user))
        .catch(e => handleError(res, e.message, "Failed to create new user"))
});

// Get user details
app.get("/api/user/:id", (req, res) => {
    PgMainTable
        .findById(req.params.id)
        .then(user => res.status(200).json(user))
        .catch(e => handleError(res, e.message, "Failed to get user"))
});

// Update user details
app.put("/api/user/:id", (req, res) => {
    const object = req.body;
    delete object.id;
    const searchOpts = {
        object,
        where: {
            id: req.params.id,
        },
    };
    PgMainTable
        .update(searchOpts)
        .then(num => {
            const message = (num === 1) ? 'Update successful' : `No user with id ${req.params.id}`;
            return res.status(200).json({ message })
        })
        .catch(e => handleError(res, e.message, "Failed to update user"))
});

// Delete a user
app.delete("/api/user/:id", (req, res) => {
    const searchOpts = {
        where: {
            id: req.params.id,
        },
    };
    PgMainTable
        .delete(searchOpts)
        .then(num => {
            const message = (num === 1) ? 'Delete successful' : `No user with id ${req.params.id}`;
            return res.status(200).json({ message })
        })
        .catch(e => handleError(res, e.message, "Failed to delete user"))
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

