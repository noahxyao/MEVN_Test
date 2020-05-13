require('dotenv').config();
const express = require('express');
const server = express();
const cors = require('cors');

const mongoose = require('mongoose');
// mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
// const db = mongoose.connection;
// db.on('error', (error) => console.error(error));
// db.once('open', () => console.log('Connected to database!'));


const uri = "mongodb+srv://noah:u2F0ygmV91i8Jhr6@mpgroup2-t5b2j.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

.then(() => {
    console.log('MongoDB Atlas connected')
})

.catch(err => console.log(err))




server.use(express.json());
server.use(cors());

const router = require('./characters');
server.use('/characters', router);

server.listen(3000, () => console.log("Server started!"));