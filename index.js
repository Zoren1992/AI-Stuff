const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

// Enable nody parser
app.use(express.json());
app.use(express.urlencoded( { extended: false} ));

app.use('/openai', require('./routes/openaiRoutes'));

app.listen(port, () => console.log(`Sever started on port ${port}`));