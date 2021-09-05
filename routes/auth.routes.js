const express = require('express');
const router = express.Router();

const { postsMiddlewares } = require("../middlewares");
const controller = require("../controllers/auth.controllers");



router.post(
    "/signup",
    [
        postsMiddlewares.checkDuplicateUsernameOrEmail
    ],
    controller.signup
);

router.post("/signin", controller.signin);

module.exports = router;