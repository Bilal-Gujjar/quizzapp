import { QuizType, QuestionType, } from './../Types/quiztype'


const shuffleArray = (arry: any[]) =>
    [...arry].sort(() => Math.random() - 0.5)
export const getQuizDtails = async (totalQuestions: number, level: string): Promise<QuestionType[]> => {
    const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`);
    let { results } = await res.json();
    const quiz: QuizType[] = results.map((questionObj: QuestionType) => {
        return {
            question: questionObj.question,
            answer: questionObj.correct_answer,
            correct_answer: questionObj.correct_answer,
            opition: shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))


        }
    })
    return quiz;

}
