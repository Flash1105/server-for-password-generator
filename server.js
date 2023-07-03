const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());


let passwordHistory = [];


app.post('/passwords', (req, res) => {
  const { password, notes } = req.body;
  const entry = { password, notes };
  passwordHistory.push(entry);
  res.status(201).json(entry);
});


app.get('/passwords', (req, res) => {
  res.json(passwordHistory);
});


const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
