import React, { useState } from 'react'
import { questionPropsType } from './../Types/quiztype'

const QuestionCard: React.FC<questionPropsType> = ({ question, opition ,callback }) => {
    //console.log(question,opition);
let [ selectedAns, setSelectionAns] =  useState("");
const handleSelection = ( ev : any) => {
    console.log(ev.target.value);
        setSelectionAns(ev.target.value);
}
    return (
        <div className=' question-container'>
            <div className='question'>
                {question}
            </div>
            <form onSubmit = {(e:React.FormEvent<EventTarget>) =>callback(e,selectedAns)}>
                {
                    opition.map((opt: string, ind: number) => {
                        return (
                            <div key={ind}>
                                <label>
                                    <input
                                        type="radio"
                                        name="opt"
                                        required
                                        value={opition}
                                        //checked = {selectedAns === opt}
                                        onChange = {handleSelection}
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
