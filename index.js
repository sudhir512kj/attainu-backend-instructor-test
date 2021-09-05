const { urlencoded, json } = require('express');
const express = require('express')
const mongoose = require('mongoose')

const authRoutes = require('./routes/auth.routes');
const postsRoutes = require('./routes/posts.routes');


const app = express();

app.use(urlencoded({ extended: false }));
app.use(json());

const db = require('./config/keys_dev').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected!!"))
    .catch((err) => console.log(err));

// routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postsRoutes);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));