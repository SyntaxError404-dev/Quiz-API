const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 4001;

app.use(cors());

const quizUrl = 'https://raw.githubusercontent.com/SyntaxError404-dev/Quiz-Json-/main/quiz.json';
let quizData = [];

const fetchQuizData = async () => {
  try {
    const response = await axios.get(quizUrl);
    quizData = response.data;
  } catch (error) {
    console.error('Error fetching quiz data:', error);
  }
};

app.get('/quiz', (req, res) => {
  if (quizData.length === 0) {
    return res.status(500).send('Quiz data is not available');
  }

  const randomQuestion = quizData[Math.floor(Math.random() * quizData.length)];
  res.status(200).send(randomQuestion);
});

fetchQuizData();

app.listen(port, () => {
  console.log(`Quiz server running at http://localhost:${port}`);
});
