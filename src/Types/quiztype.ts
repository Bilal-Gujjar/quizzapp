import React from "react";



export type   QuestionType =  {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
    answer : string
    opition : string[]
}

export type  QuizType={
    question :string
    answer : string
    opition : string[]
    correct_answer: string
    incorrect_answers: string[]
    type: string
    difficulty: string
    category: string
}
export type questionPropsType = {
    question : string
    opition : string[] 
    callback :(e:React.FormEvent<EventTarget>,ans:string) => void
}