import {Quiz, QuestionType,} from './../Types/quiztype'


const shuffleArray = (arry : any[])=>
[...arry].sort(() => Math.random() - 0.5)
export const getQuizDtails = async (totalQuestions: number , level : string): Promise<QuestionType[]> => {



    const res = await fetch (`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`);
   let {results} = await res.json();
    const quiz: QuestionType [] = results.map((questionObj: Quiz)  => {
        return {
            question: questionObj.question,
            answer : questionObj.correct_answer,
            opition : shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))
        

        }
    })
     return quiz;   
     
}
