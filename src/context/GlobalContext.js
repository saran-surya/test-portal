import React, { createContext, useReducer } from 'react'
import Appreducer from './Reducer';
import questionsObj from "../assets/questions.json"


const initialState = {
    currQ: 0,
    allQuestions : [],
    totalQuestions : 0
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Appreducer, initialState)

    function renderQuestions() {
        var renderedDownQuestions = []

        for (var i in questionsObj) {
            let tempBuffer = {}
            tempBuffer[i] = {
                Qstate : 'UN-ANSWERED',
                Question : questionsObj[i].Question,
                Marked : 0,
                Choices : {
                    ...questionsObj[i].Choices,
                }
            }

            for (var choice in questionsObj[i].Choices){
                delete tempBuffer[i].Choices[choice].Score
            }
            renderedDownQuestions.push(tempBuffer)
        }

        dispatch({
            type: "SET-INITIAL",
            payload : renderedDownQuestions
        })

    }
    function setQ(qNo) {
        console.log(Number(qNo))
        dispatch({
            type: 'SET-Q',
            payload: Number(qNo) - 1
        })
    }

    function nextQ() {
        if(state.currQ + 1 < state.totalQuestions){
            setQ(state.currQ + 2)
        }
    }

    function prevQ() {
        if(state.currQ - 1 >= 0){
            setQ(state.currQ)
        }
    }

    function markedQ() {
        dispatch({
            type: 'MARKED-Q',
        })
    }

    function answerQ(option) {
        console.log(state.allQuestions[state.currQ][(state.currQ) + 1].Marked)

        dispatch({
            type: 'ANSWERED-Q',
            payload: option
        })
    }

    function submitTest() {
        dispatch({
            type: 'NEXT-Q',
            payload: 1
        })
    }

    return (
        <GlobalContext.Provider value={{
            currQ: state.currQ,
            allQuestions : state.allQuestions,
            totalQuestions: state.totalQuestions,

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