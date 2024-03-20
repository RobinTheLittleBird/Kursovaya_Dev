// app.js
const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => res.send('Hello World! And me) Please work!'));

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
