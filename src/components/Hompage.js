import React, { useContext } from 'react'
import { AnswerOption } from './AnswerOption'
import { GlobalContext } from '../context/GlobalContext'


export const Hompage = () => {

    let { currQ, allQuestions, totalQuestions, setQ, markedQ, prevQ, nextQ } = useContext(GlobalContext)
    // console.log(`Home page : `, allQuestions, currQ)

    let qNoOverview = [];


    allQuestions.forEach((buffer, index) => {
        var bufferClassName = `flex items-center justify-center w-8 h-8 rounded-full cursor-pointer font-semibold font-mono `

        buffer = buffer[index + 1]
        if (currQ == index) {
            bufferClassName += `bg-blue-500`
        } else {
            switch (true) {
                case buffer.Qstate == 'ANSWERED':
                    bufferClassName += `bg-green-500`
                    break

                case buffer.Qstate == 'MARKED':
                    bufferClassName += `bg-yellow-500`
                    break

                default:
                    bufferClassName += `bg-white`
                    break

            }
        }




        qNoOverview.push(
            <div className={bufferClassName} key={index} onClick={(e) => setQ(e.target.innerHTML)}>
                {index + 1}
            </div>
        );
    });

    let currQObj = allQuestions[currQ]?.[currQ + 1]
    let answerChoices = []

    for (var i in currQObj?.Choices) {
        answerChoices.push(
            <AnswerOption propObj={{
                Option: i,
                Marked: currQObj.Marked,
                Text: currQObj.Choices[i].Text
            }} />
        )
    }




    return (
        <div className='bg-slate-500 w-screen min-h-screen'>
            <div className='flex'>
                {/* Configuration / Questions Area */}
                <div className='w-1/4 bg-slate-600 min-h-screen'>
                    <div className='flex flex-col h-full items-center justify-evenly'>
                        <div className='text-3xl font-semibold'>
                            Summary
                        </div>
                        <div className='grid grid-cols-5 gap-x-3 gap-y-2'>
                            {qNoOverview}
                        </div>

                        <div className='flex flex-col justify-around w-full select-none font-semibold'>
                            <div className='flex justify-around'>
                                <div className='p-4 bg-blue-700 rounded-lg text-white min-w-52 cursor-pointer text-left' onClick={prevQ} > {"<< Previous"}</div>
                                <div className='p-4 bg-blue-700 rounded-lg text-white min-w-52 cursor-pointer text-right' onClick={nextQ}>{"Next >>"}</div>
                            </div>
                            <div className='p-4 bg-yellow-500 rounded-lg cursor-pointer mt-4 mx-4 text-black' onClick={markedQ}>Mark For Review</div>
                        </div>
                    </div>
                </div>

                {/* Main Work Area */}
                <div className='w-3/4 bg-cyan-200'>
                    {/* Header Component */}
                    <div className='flex flex-col'>
                        <div className='bg-red-500 flex p-2 items-center justify-between h-[10%]'>
                            <div className='text-2xl'>
                                A Really Long Company Name
                            </div>
                            <div className='flex justify-between w-30 items-center'>
                                <div className='text-xl mx-10'>
                                    Question {currQ + 1} / {totalQuestions}
                                </div>

                                <div className='text-xl mx-10'>
                                    Timer
                                </div>

                                <div className='text-xl bg-green-300 p-2 rounded-md mx-10 cursor-pointer'>
                                    Submit
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Question Component */}
                    <div className='flex flex-col items-center justify-center h-[90%]'>
                        <div className='m-5 p-10 text-xl select-none'>
                            {currQObj?.Question}
                        </div>

                        {/* Answers : Choose between radio and checkbox */}
                        <div className='grid grid-rows-2 grid-cols-2 gap-x-10 gap-y-5 text-xl w-3/4'>
                            {answerChoices}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
