const User = require("../models/user.model");

checkDuplicateUsernameOrEmail = (req, res, next) => {
    User.findOne({
        email: req.body.email
    }).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (user) {
            res.status(400).send({ message: "Failed! Email is already in use!" });
            return;
        }

        next();
    });
};

checkIfAdmin = (req, res, next) => {
    User.findById(req.userId).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if (user.role === "admin") {
            next();
            return;
        }

        res.status(403).send({ message: "Require Admin Role!" });
        return;
    });
}

const verifySignUp = {
    checkDuplicateUsernameOrEmail,
    checkIfAdmin
};

module.exports = verifySignUp;
