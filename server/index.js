const express = require('express');
const cors = require('cors');

const PORT = 3132;

const app =  express();

app.use(express.static(__dirname + '/../lib'));
// app.use(cors());



app.listen(PORT, () => console.log('Server started on port: ', PORT))
