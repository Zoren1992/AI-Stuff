const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const port = 3000;

const app = express();

// Enable nody parser
app.use(express.json());
app.use(express.urlencoded( { extended: false} ));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/openai', require('./routes/openaiRoutes'));

app.listen(port, () => console.log(`Sever started on port ${port}`));