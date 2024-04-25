import React, { createContext, useReducer } from 'react'
import Appreducer from './Reducer';
import questionsObj from "../config/questions.json"


const initialState = {
    currQ: 0,
    allQuestions: [],
    totalQuestions: 0,
    testActive : false,
    testInit : true,
    totalScore : 0
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Appreducer, initialState)

    function renderQuestions() {
        var renderedDownQuestions = []

        for (var i in questionsObj) {
            console.log(questionsObj[i])
            let tempBuffer = {}
            tempBuffer[i] = {
                Qstate: 'UN-ANSWERED',
                Question: questionsObj[i].Question,
                Marked: 0,
                Choices: {
                    ...questionsObj[i].Choices,
                }
            }

            for (var choice in questionsObj[i].Choices) {
                // delete tempBuffer[i].Choices[choice].Score
            }
            renderedDownQuestions.push(tempBuffer)
        }

        dispatch({
            type: "SET-INITIAL",
            payload: renderedDownQuestions
        })

    }
    function setQ(qNo) {
        if(!(state.testActive)) return

        dispatch({
            type: 'SET-Q',
            payload: Number(qNo) - 1
        })
    }

    function nextQ() {
        if(!(state.testActive)) return

        if (state.currQ + 1 < state.totalQuestions) {
            setQ(state.currQ + 2)
        }
    }

    function prevQ() {
        if(!(state.testActive)) return

        if (state.currQ - 1 >= 0) {
            setQ(state.currQ)
        }
    }

    function markedQ() {
        if(!(state.testActive)) return

        dispatch({
            type: 'MARKED-Q',
        })
    }

    function answerQ(option) {
        if(!(state.testActive)) return

        console.log(state.allQuestions[state.currQ][(state.currQ) + 1].Marked)

        dispatch({
            type: 'ANSWERED-Q',
            payload: option
        })
    }

    function submitTest() {
        if(!(state.testActive)) return

        // grade assesment and show popup
        let score = 0

        let allQuestions = state.allQuestions
        var qCounter = 1
        for (var i in allQuestions) {
            console.log(allQuestions[i][qCounter])
            let marked = allQuestions[i][qCounter].Marked
            let scoreObj = allQuestions[i][qCounter].Choices[Number(marked)]
            if(scoreObj){
                score += Number(scoreObj.Score)
            }
            qCounter++
        }

        console.log("total - score", score)

        // set test-active to false
        dispatch({
            type: 'SUBMIT-TEST',
            payload : score
        })
    }

    return (
        <GlobalContext.Provider value={{
            // Toggle states of the test
            testActive: state.testActive,
            testInit : state.testInit,

            // Test Objects
            currQ: state.currQ,
            allQuestions: state.allQuestions,
            totalQuestions: state.totalQuestions,
            totalScore: state.totalScore,

            // helper functions
            renderQuestions,
            setQ,
            nextQ,
            prevQ,
            markedQ,
            answerQ,
            submitTest,

            loading: state.loading,
            error: state.error
        }}>
            {children}
        </GlobalContext.Provider>
    )
}