import React, { useContext } from 'react'
import { AnswerOption } from './AnswerOption'
import { GlobalContext } from '../context/GlobalContext'
import { TimerComponent } from './TimerComponent'
import { Introduction } from './Introduction'


export const Hompage = () => {

    let {
        currQ, allQuestions, totalQuestions, setQ, markedQ, prevQ, nextQ, submitTest, testInit, testActive, totalScore,
        correctAnswers,
        wrongAnswers,
        unAnswered,
        sections
    } = useContext(GlobalContext)
    // console.log(`Home page : `, allQuestions, currQ)

    let qNoOverview = [];


    let section1 = []

    let section2 = []

    console.log(`sections in total : `, sections)

    let sectionName = <div>Section name</div>

    let qno = 1;
    for (var i in sections) {
        qNoOverview.push(i);
            (sections[i]).forEach((buffer, index) => {
                var bufferClassName = `flex items-center justify-center w-8 h-8 rounded-full cursor-pointer font-semibold font-mono `
                
                buffer = buffer[index + 1]
                console.log(buffer)
                if (currQ == index) {
                    bufferClassName += `bg-blue-500`
                } else {
                    switch (true) {
                        case buffer?.Qstate == 'ANSWERED':
                            bufferClassName += `bg-green-500`
                            break

                        case buffer?.Qstate == 'MARKED':
                            bufferClassName += `bg-yellow-500`
                            break

                        default:
                            bufferClassName += `bg-white`
                            break

                    }
                }
                qNoOverview.push(<div className={bufferClassName} key={qno} onClick={(e) => setQ(e.target.innerHTML)}>
                    {qno}
                </div>)
                qno += 1
                // console.log(sections[i])
            })
    }
    console.log("Questions overview :  ", qNoOverview)

    // sections.forEach((buffer, index) => {
    // console.log("Section buffer - ", buffer)
    // var bufferClassName = `flex items-center justify-center w-8 h-8 rounded-full cursor-pointer font-semibold font-mono `
    // let sectionBuffer = []

    // buffer = buffer[index + 1]
    // if (currQ == index) {
    //     bufferClassName += `bg-blue-500`
    // } else {
    //     switch (true) {
    //         case buffer.Qstate == 'ANSWERED':
    //             bufferClassName += `bg-green-500`
    //             break

    //         case buffer.Qstate == 'MARKED':
    //             bufferClassName += `bg-yellow-500`
    //             break

    //         default:
    //             bufferClassName += `bg-white`
    //             break

    //     }
    // }

    // sectionBuffer.push(
    //     <div className={bufferClassName} key={index} onClick={(e) => setQ(e.target.innerHTML)}>
    //         {index + 1}
    //     </div>
    // )
    // })




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
        if (index < 3) {
            section1.push(<div className={bufferClassName} key={index} onClick={(e) => setQ(e.target.innerHTML)}>
                {index + 1}
            </div>)
        } else {
            section2.push(<div className={bufferClassName} key={index} onClick={(e) => setQ(e.target.innerHTML)}>
                {index + 1}
            </div>)
        }
        // qNoOverview.push(
        //     <div className={bufferClassName} key={index} onClick={(e) => setQ(e.target.innerHTML)}>
        //         {index + 1}
        //     </div>
        // );
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
        <div className='bg-slate-500 w-screen min-h-screen select-none'>

            {(testInit || !testActive) ?
                <>
                    <div className='absolute flex w-full h-full items-center justify-center z-10'>

                        {(!testActive && !testInit) ?
                            <div className='text-3xl font-mono font-semibold bg-black text-white w-[60%] h-[60%] rounded-2xl shadow-lg p-4 absolute z-10 flex flex-col justify-around'>
                                <div>Thankyou for Participating</div>
                                <div>
                                    <div>Final Results</div>
                                    <div>Answered Questions : {totalQuestions - unAnswered}</div>
                                    <div>Correct Answers : {correctAnswers} </div>
                                    <div>Wrong Answers : {wrongAnswers} </div>
                                    <div>Unanswered Questions : {unAnswered} </div>
                                    <div>Test Score : {totalScore} / {totalQuestions} </div>
                                </div>
                            </div>
                            :
                            <div className='absolute bg-black w-[80%] h-[90%] rounded-xl shadow-lg'>
                                <Introduction />
                            </div>
                        }
                    </div>
                </>
                :
                <>
                    <div className={(testInit || !testActive) ? 'flex blur-2xl' : 'flex'}>
                        {/* Configuration / Questions Area */}
                        <div className='w-1/4 bg-slate-700 min-h-screen'>
                            <div className='flex flex-col h-full items-center justify-evenly'>
                                <div className='text-3xl font-semibold text-white'>
                                    Test Summary
                                </div>

                                <div className='grid grid-cols-5 gap-x-3 gap-y-2'>
                                    {qNoOverview}
                                </div>


                                <div className='flex flex-col justify-around w-full select-none font-semibold'>
                                    <div className='flex justify-around'>
                                        <div className='p-4 bg-blue-500 rounded-lg text-white min-w-52 cursor-pointer text-left' onClick={prevQ} > {"<< Previous"}</div>
                                        <div className='p-4 bg-blue-500 rounded-lg text-white min-w-52 cursor-pointer text-right' onClick={nextQ}>{"Next >>"}</div>
                                    </div>
                                    <div className='p-4 bg-yellow-500 rounded-lg cursor-pointer mt-4 mx-4 text-black' onClick={markedQ}>Mark For Review</div>
                                </div>


                            </div>
                        </div>

                        {/* Main Work Area */}
                        <div className='w-3/4 bg-slate-300'>
                            {/* Header Component */}
                            <div className='flex flex-col'>
                                <div className='bg-yellow-500 flex p-2 items-center justify-between h-[10%] font-semibold'>
                                    <div className='text-2xl'>
                                        A Really Long Company Name
                                    </div>
                                    <div className='flex justify-between w-30 items-center'>
                                        <div className='text-xl mx-10'>
                                            Question {currQ + 1} / {totalQuestions}
                                        </div>

                                        <div className='text-xl mx-10'>
                                            <TimerComponent />
                                        </div>

                                        <div className='text-xl bg-green-600 p-2 rounded-md mx-10 cursor-pointer text-white' onClick={submitTest}>
                                            Submit
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Question Component */}
                            <div className='flex flex-col items-center justify-center h-[90%]'>
                                <div className='m-5 p-10 text-2xl select-none font-semibold'>
                                    {currQObj?.Question}
                                </div>

                                {/* Answers : Choose between radio and checkbox */}
                                <div className='grid grid-rows-2 grid-cols-2 gap-x-10 gap-y-5 text-xl w-3/4'>
                                    {answerChoices}
                                </div>

                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
