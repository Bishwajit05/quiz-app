import React from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./app/Homepage";
import QuizPage from "./app/QuizPage";

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" Component={Homepage} />
        <Route path="/quiz" Component={QuizPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
