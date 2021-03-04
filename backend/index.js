const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dbConfig = require("./database/db")

// Express Route
const studentRoute = require("../backend/routes/student.route")

// Connecting MongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true
}).then(() => {
    console.log("Connected to MongoDB Database !")
},
    error => {
        console.log("An error occured while connecting to MongoDB Database !")
        console.log(error)
    }
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors());
app.use("/students", studentRoute);

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log("Server are now started at port : " + port);
})

// Handle 404 not found error
app.use((req, res, next) => {
    next(createError(404))
})

// Handle Error
app.use(function (error, req, res, next) {
    console.error(error.message);

    if (!error.statusCode) {
        error.statusCode = 500;
    } else {
        res.status(error.statusCode).send(error.message);
    }
})