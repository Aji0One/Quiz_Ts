import React, { useState } from 'react';
import { obj } from "./ques_ans";
import './App.css';
import stateContest from './Context/MyContext';
import Dashboard from './Pages/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Quiz from './Pages/Quiz';
import Report from './Pages/Report';


function App() {
  let formContent = {

    name: "",
    email: "",
    phoneNo: "",
    lang: "",
    error: {
      name: "",
      email: "",
      phoneNo: "",
      lang: ""
    }
  }

  const [formData, setFormData] = useState<any>(formContent);
  const [quizSet, setQuizSet] = useState<any[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<any[]>();
  const [answersSet, setAnswersSet] = useState<number>(0);
  const [qIndex, setQIndex] = useState<number>(0);

  return (
    <div className="App">
      <BrowserRouter>


        <stateContest.Provider value={{ formData, setFormData, quizSet, setQuizSet, currentQuestion, setCurrentQuestion, answersSet, setAnswersSet, qIndex, setQIndex }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path='/quiz' element={<Quiz />} />
            <Route path="/report" element={<Report />} />

          </Routes>

        </stateContest.Provider>
      </BrowserRouter>

    </div>
  );
}

export default App;
