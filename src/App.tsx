import React, { useEffect, useState } from 'react';
import './App.css';
//import Services
import { getQuizDtails } from './Services/quizz_services';
import { QuestionType, QuizType } from './Types/quiztype';
import QuestionCard from './components/QuestionCard'

function App() {

  let [quiz, setQuiz] = useState<QuestionType[]>([])
  let [currentStep, setcurrentStep] = useState(0)
  let [score, setscore] = useState(0)

  useEffect(() => {
    async function fetchData() {
      const questions : QuizType[] = await getQuizDtails(5, 'easy');
      //console.log(questions);
      setQuiz(questions)

    }

    fetchData();
  }, [])
  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {

    e.preventDefault();
  const currentQuestion : QuizType = quiz [currentStep];
  console.log("correct And : "+ currentQuestion.correct_answer+ "--user Selection" + userAns);
  
  if (userAns === currentQuestion.correct_answer) {
 setscore(++score);
    }
    if (currentStep !== quiz.length - 1)

      setcurrentStep(++currentStep);
    else {
      alert    ("Your final score is" + score + "out of : "  + quiz.length)
      setcurrentStep(0);
      setscore(0);
    }


  }
  if (!quiz.length)

    return <h1>Please Wait for data fatching  Api From remote server..........</h1>
  return (
    <div>
      <QuestionCard
        opition={quiz[currentStep].opition}
        question={quiz[currentStep].question}
        callback={handleSubmit}
      />

    </div>
  );
}

export default App;
