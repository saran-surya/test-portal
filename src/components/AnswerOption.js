import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

export const AnswerOption = ({propObj}) => {

    let {answerQ} = useContext(GlobalContext)

    // console.log(propObj)
    propObj = (propObj?.Text && propObj?.Option) ? propObj : {Text : "This is a placeholder", Option : 1}
    console.log(propObj)

    let answerStyle = `min-h-20 flex items-center px-5 py-2 rounded-lg cursor-pointer select-none ${(propObj.Marked -1 == propObj.Option-1)? `bg-green-500`  : `bg-neutral-50`}`


    let optionSelect = (e) =>{
        answerQ(propObj.Option)
    }

    return (
        <div className= {answerStyle} onClick={optionSelect}>
            {propObj.Text}
        </div>
    )
}
