import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "Madrid", "Rome"],
    answer: "Paris",
  },
  {
    id: 2,
    question: "What is the tallest mammal?",
    options: ["Giraffe", "Elephant", "Whale", "Dolphin"],
    answer: "Giraffe",
  },
  {
    id: 3,
    question: "What is the tallest mammal?",
    options: ["Giraffe", "Elephant", "Whale", "Dolphin"],
    answer: "Giraffe",
  },
  {
    id: 4,
    question: "What is the tallest mammal?",
    options: ["Giraffe", "Elephant", "Whale", "Dolphin"],
    answer: "Giraffe",
  },
  {
    id: 5,
    question: "What is the tallest mammal?",
    options: ["Giraffe", "Elephant", "Whale", "Dolphin"],
    answer: "Giraffe",
  },
  {
    id: 6,
    question: "What is the tallest mammal?",
    options: ["Giraffe", "Elephant", "Whale", "Dolphin"],
    answer: "Giraffe",
  },
];

const QuizPage = () => {
  // const navigate = useNavigate();
  const timeLimit = 60;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(timeLimit);

  useEffect(() => {
    if (selectedOption !== "") {
      if (selectedOption === questions[currentQuestion].answer) {
        setScore(score + 1);
      }
      setSelectedOption("");
      setCurrentQuestion(currentQuestion + 1);
    }
  }, [selectedOption, currentQuestion, score]);
  useEffect(() => {
    const timer = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining - 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [timeRemaining]);
  if (currentQuestion >= questions.length || timeRemaining <= 0) {
    return (
      <div>
        <h1>Quiz over!</h1>
        <p>
          Your score is {score} out of {questions.length}.
        </p>
        {/* <p>Time remaining: {timeRemaining} seconds.</p> */}
      </div>
    );
  }
  const question = questions[currentQuestion];
  return (
    <div>
      <h1>Question {currentQuestion + 1}</h1>
      <h2>{question.question}</h2>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={(event) => setSelectedOption(event.target.value)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      <p>Time remaining: {timeRemaining} seconds.</p>
    </div>
  );
};

export default QuizPage;
