import React, { useEffect, useState } from 'react';
import './App.css';
//import Services
import { getQuizDtails } from './Services/quizz_services';
import { QuestionType } from './Types/quiztype';
import QuestionCard from './components/QuestionCard'

function App() {

  let [quiz, setQuiz] = useState<QuestionType[]>([])
  let [currentStep, setcurrentStep] = useState(0)
  useEffect(() => {
    async function fetchData() {
      const questions: QuestionType[] = await getQuizDtails(5, 'easy');
      console.log(questions);
      setQuiz(questions)

    }

    fetchData();
  }, [])
  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {

    console.log(userAns);
    
    e.preventDefault();
    if (currentStep !== quiz.length - 1)

      setcurrentStep(++currentStep);
    else {
      alert("Quiz Completed")
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
