// app.js
const express = require('express');
const app = express();
const port = 100;

app.get('/', (req, res) => res.send('Hello World! stop'));

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
