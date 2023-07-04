const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let passwordHistory = [];


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

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
