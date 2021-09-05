const express = require('express');
const router = express.Router();

const { postsMiddlewares, authJwt } = require("../middlewares");

const controller = require("../controllers/posts.controllers");



router.post("/", [authJwt.verifyToken, postsMiddlewares.checkIfAdmin], controller.createPost);

router.get("/", [authJwt.verifyToken], controller.getAllPosts);
router.put("/:id", [authJwt.verifyToken, postsMiddlewares.checkIfAdmin], controller.updatePost);
router.delete("/:id", [authJwt.verifyToken, postsMiddlewares.checkIfAdmin], controller.deletePost);

module.exports = router;