// app.js
const express = require('express');
const app = express();
const port = 80;

// Middleware для обработки JSON данных в теле запроса
app.use(express.json());


app.get('/', (req, res) => res.send('Hello World! work?'));


// Обработчик маршрута "/days-to-new-year" для вывода количества дней до Нового года
app.get('/days-to-new-year', (req, res) => {
  const today = new Date();
  const newYear = new Date(today.getFullYear() + 1, 0, 1); // Дата Нового года следующего года
  const daysLeft = Math.floor((newYear - today) / (1000 * 60 * 60 * 24)); // Вычисляем количество дней до Нового года
  res.send(`Days left until New Year: ${daysLeft}`);
});


app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
