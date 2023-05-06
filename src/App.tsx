import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./app/Homepage";
import QuizPage from "./app/QuizPage";
import ScorePage from "./app/ScorePage";
function App() {
  return (
    <div className="w-full h-full">

    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/quiz" Component={QuizPage} />
        <Route path="/score" Component={ScorePage} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
