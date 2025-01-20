const express = require('express');
const app = express();
const connectDB = require('./config/db.js');
const userRoute = require('./routes/userRoute.js');


app.get('/', (req, res) => {
    try {
        res.send('Hello World');
        console.log("My first API is working");
    } catch (error) {
        res.status(500).send("Server Error");
        console.log(error.message);
    }
    });

    app.use(express.json());
    

    app.listen(8000, async () => {
        try {
            await connectDB();
            console.log("listening on port 8000");
        } catch (error) {
            console.error(error.message);
        }
    });

    app.use('/api/user', userRoute);