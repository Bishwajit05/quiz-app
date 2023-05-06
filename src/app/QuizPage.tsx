import React, { useEffect, useState } from "react";
import ScoreCard from "../components/ScoreCard";
// import { useNavigate } from "react-router-dom";

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
    question: "What is the capital city of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "New Delhi",
  },
  {
    id: 4,
    question: "Which state is also known as the “Fruit Bowl” of India?",
    options: ["Jammu and Kashmir", "Himachal Pradesh", "Assam", "Meghalaya"],
    answer: "Himachal Pradesh",
  },
  {
    id: 5,
    question: "Who discovered India?",
    options: ["Vasco da Gama", "Christopher Columbus", "James Cook", "Willem Janszoon"],
    answer: "Vasco da Gama",
  },
];

const QuizPage = () => {
  // const navigate = useNavigate();
  const timeLimit = 60;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(timeLimit);
  const [tempSelected, setTempselected] = useState("");

  useEffect(() => {
    const handleBeforeUnload = (event: any) => {
      event.preventDefault();
      event.returnValue = ""; // Required for Chrome and Firefox
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    if (selectedOption !== "") {
      if (selectedOption === questions[currentQuestion].answer) {
        setScore(score + 1);
      }
      setTempselected("");
      setSelectedOption("");
      setCurrentQuestion(currentQuestion + 1);
    }
  }, [selectedOption, currentQuestion, score]);
  useEffect(() => {
    const timer = setInterval(() => {
      if (timeRemaining > 0 && currentQuestion !== questions.length) {
        setTimeRemaining(timeRemaining - 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [timeRemaining,currentQuestion]);
  if (currentQuestion >= questions.length || timeRemaining <= 0) {
    const completeTime = timeRemaining;

    return (
      <ScoreCard
        score={score}
        timeTaken={completeTime}
        totalQuestions={questions.length}
      />
    );
  }
  const question = questions[currentQuestion];
  return (
    <div className="w-full h-full">
      <div className="md:flex md:flex-col md:items-center md:justify-center w-full">
        <div className="flex items-center justify-between pt-4 md:w-1/2  px-4">
          <span className="w-16 h-7 bg-purple-600 rounded-3xl flex items-center justify-center font-bold text-white text-sm">
            {currentQuestion + 1}/{questions.length}
          </span>
          <span className="w-16 h-7 bg-purple-600 rounded-3xl flex items-center justify-center font-bold text-white text-sm">
            {timeRemaining}
          </span>
        </div>
        <div className="flex justify-center flex-col px-4 md:w-1/2">
          {/* <h1>Question {currentQuestion + 1}</h1> */}
          <h2 className="text-xl py-6">{question.question}</h2>

          <div className="w-full">
            <ul className="w-full justify-end flex h-full lg:grid-cols-2 lg:grid lg:gap-4 flex-col lg:my-20">
              {question.options.map((option, index) => (
                <li key={index} className="my-3 bg-slate-300 rounded-lg">
                  <label className="flex justify-between h-14 items-center px-3">
                    {option}
                    <input
                      className="bg-purple-700"
                      type="radio"
                      value={option}
                      checked={tempSelected === option}
                      onChange={(event) => setTempselected(event.target.value)}
                    />
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="absolute bottom-0 flex items-center justify-center w-full h-20 bg-teal-50 drop-shadow-md">
          <button
            onClick={() => setSelectedOption(tempSelected)}
            className="flex items-center justify-center bg-purple-700 h-12 w-1/3 rounded-3xl hover:bg-purple-600 text-white font-semibold"
          >
            {currentQuestion === questions.length ? "Submit" : "Next"}
          </button>
        </div>
      </div>
      {/* <p>Time remaining: {timeRemaining} seconds.</p> */}
    </div>
  );
};

export default QuizPage;
