const Post = require("../models/posts.model");

exports.getAllPosts = async (req, res) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const skipIndex = (page - 1) * limit;

    const resultLength = await Post.count();
    const result = await Post.find().sort({ _id: 1 }).limit(limit).skip(skipIndex).exec();
    return res.send({
        result: result,
        postsCount: resultLength
    });
}

exports.createPost = async (req, res) => {
    //create post
    const newPost = new Post(req.body.post);
    let result = await newPost.save();
    return res.send({
        "message": "success!!"
    })
};

exports.deletePost = (req, res) => {
    Post.findByIdAndRemove(req.params.id, (err) => {
        if (err) {
            res.status(500).send({ "message": "failed!!" });
        } else {
            res.send({
                "message": "success!!"
            });
        }
    });
}

exports.updatePost = (req, res) => {
    Post.findByIdAndUpdate(req.params.id, req.body.post, (err, updatedPost) => {
        if (err) {
            res.status(500).send({ "message": "failed!!" });
        } else {
            res.send({
                "message": "success!!"
            });
        }
    });
}