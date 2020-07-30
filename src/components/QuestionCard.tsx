import React from 'react'
import { questionPropsType } from './../Types/quiztype'

const QuestionCard: React.FC<questionPropsType> = ({ question, opition ,callback }) => {
    //console.log(question,opition);


    return (
        <div className=' question-container'>
            <div className='question'>
                {question}
            </div>
            <form onSubmit = {callback}>
                {
                    opition.map((opt: string, ind: number) => {
                        return (
                            <div key={ind}>
                                <label>
                                    <input
                                        type="radio"
                                        name="opt"
                                        value={opition}
                                    />
                                    {opt}
                                </label>
                            </div>
                        )
                    })
                }
                <input type='submit' />
            </form>

        </div>
    )
}

export default QuestionCard;
