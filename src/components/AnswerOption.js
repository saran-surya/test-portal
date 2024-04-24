import React from 'react'

export const AnswerOption = ({option}) => {

    console.log(option)
    option = (option?.Text && option?.Option) ? option : {Text : "This is a placeholder", Option : 1}


    let optionSelect = (e) =>{
        console.log("The user has selcted the option")

        // Note update state of the answer in the global context
        console.log(option)
    }

    return (
        <div className='bg-neutral-50 min-h-20 flex items-center px-5 py-2 rounded-lg cursor-pointer hover:bg-slate-200 select-none' onClick={optionSelect}>
            {option.Text}
        </div>
    )
}
