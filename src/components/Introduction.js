import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

import instructionImg from "../assets/instructions.png"

export const Introduction = () => {

    let { renderQuestions } = useContext(GlobalContext)


    return (
        <div>
            <div className='box-content flex items-center justify-center m-4'>
                <img src={instructionImg} className='rounded-lg' />
            </div>
            <div className='flex items-center'>
                <div className='p-4 bg-white w-fit rounded-lg mx-4 animate-pulse hover:animate-none font-semibold cursor-pointer select-none' onClick={renderQuestions}>
                    Start Test
                </div>
                <div className='text-white font-mono font-semibold text-xl'>
                    Click on start test once you have read all the instructions
                </div>
            </div>

        </div>
    )
}
