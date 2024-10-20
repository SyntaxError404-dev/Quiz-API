const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 4001;

app.use(cors());

const quizUrl = 'https://raw.githubusercontent.com/SyntaxError404-dev/Quiz-Json-/main/quiz.json';

app.get('/quiz', async (req, res) => {
  try {
    const response = await axios.get(quizUrl);
    const quizData = response.data;
    res.status(200).send(quizData);
  } catch (error) {
    res.status(500).send('Error fetching quiz data');
  }
});

app.listen(port, () => {
  console.log(`Quiz server running at http://localhost:${port}`);
});
