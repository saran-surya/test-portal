import React from 'react'
import { AnswerOption } from './AnswerOption'

export const Hompage = () => {
    return (
        <div className='bg-slate-500 w-screen min-h-screen'>
            <div className='flex'>
                {/* Configuration / Questions Area */}
                <div className='w-1/4 bg-yellow-100 min-h-screen'>
                    <div className='flex flex-col h-full items-center justify-evenly'>
                        <div className='text-3xl font-semibold'>
                            Summary
                        </div>
                        <div className='grid grid-cols-5 gap-x-3 gap-y-2'>
                            <div className='flex items-center justify-center w-8 h-8 bg-green-300 rounded-full'>
                                1
                            </div>
                            <div className='flex items-center justify-center w-8 h-8 bg-green-300 rounded-full'>
                                2
                            </div>
                            <div className='flex items-center justify-center w-8 h-8 bg-green-300 rounded-full'>
                                3
                            </div>
                            <div className='flex items-center justify-center w-8 h-8 bg-green-300 rounded-full'>
                                4
                            </div>
                            <div className='flex items-center justify-center w-8 h-8 bg-green-300 rounded-full'>
                                5
                            </div>
                            <div className='flex items-center justify-center w-8 h-8 bg-green-300 rounded-full'>
                                6
                            </div>
                            <div className='flex items-center justify-center w-8 h-8 bg-green-300 rounded-full'>
                                7
                            </div>
                        </div>

                        <div className='flex justify-around w-full'>
                            <div className='p-4 bg-blue-700 rounded-lg text-white min-w-20'> {"<< Previous"}</div>
                            <div className='p-4 bg-yellow-500 rounded-lg text-white min-w-20'>Reiview</div>
                            <div className='p-4 bg-blue-700 rounded-lg text-white min-w-20'>{"Next >>"}</div>
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
                                    Question X / X
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
                        <div className='m-5 p-10 text-xl'>
                            Some random data for questionsSome random data for questionsSome random data for questionsSome random data for questionsSome random data for questionsSome random data for questionsSome random data for questionsSome random data for questions
                            Some random data for questionsSome random data for questionsSome random data for questionsSome random data for questionsSome random data for questions
                        </div>

                        {/* Answers : Choose between radio and checkbox */}
                        <div className='grid grid-rows-2 grid-cols-2 gap-x-10 gap-y-5 text-xl w-3/4'>
                            <AnswerOption option={{
                                Option: 1,
                                Text: "Passed from the Object - 1"
                            }} />
                            <AnswerOption option={{
                                Option: 2,
                                Text: "Passed from the Object - 2"
                            }} />
                            <AnswerOption option={{
                                Option: 3,
                                Text: "Passed from the Object - 3"
                            }} />
                            <AnswerOption option={{
                                Option: 4,
                                Text: "Passed from the Object - 4"
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
