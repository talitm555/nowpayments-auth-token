const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const authRoute = require('./routes/auth');

app.use('/auth', authRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
