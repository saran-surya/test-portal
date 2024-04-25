import React, { createContext, useReducer } from 'react'
import Appreducer from './Reducer';
import questionsObj from "../config/questions.json"

/**
 * The main initial context for the complete application
 * The possiblity is to create multiple contexts thus we minimize the re-renders,
 * but following single-page application we use global contexts in this case
 */
const initialState = {
    currQ: 0,
    allQuestions: [],
    totalQuestions: 0,
    testActive: false,
    testInit: true,
    totalScore: 0
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Appreducer, initialState)

    function renderQuestions() {
        var renderedDownQuestions = []

        // Adding of additional fields in the existing question object to help with the processing
        for (var i in questionsObj) {
            let tempBuffer = {}
            tempBuffer[i] = {
                Qstate: 'UN-ANSWERED',
                Question: questionsObj[i].Question,
                Marked: 0,
                Choices: {
                    ...questionsObj[i].Choices,
                }
            }
            renderedDownQuestions.push(tempBuffer)
        }

        dispatch({
            type: "SET-INITIAL",
            payload: renderedDownQuestions
        })

    }

    /**
     * Set the current state of the page and the application
     * to the provided qNo 
     */
    function setQ(qNo) {
        if (!(state.testActive)) return

        dispatch({
            type: 'SET-Q',
            payload: Number(qNo) - 1
        })
    }

    /**
     * Move to the next question
     * binded to the next button
     */
    function nextQ() {
        if (!(state.testActive)) return

        if (state.currQ + 1 < state.totalQuestions) {
            setQ(state.currQ + 2)
        }
    }

    /**
     * Move to the previous question
     * binded to the previous button
     */
    function prevQ() {
        if (!(state.testActive)) return

        if (state.currQ - 1 >= 0) {
            setQ(state.currQ)
        }
    }

    /**
     * Marking the current question to "Review"
     * bound to "Mark For Review" button
     */
    function markedQ() {
        if (!(state.testActive)) return

        dispatch({
            type: 'MARKED-Q',
        })
    }

    /**
     * Setting the answer for the state.currQ
     */
    function answerQ(option) {
        if (!(state.testActive)) return

        // console.log(state.allQuestions[state.currQ][(state.currQ) + 1].Marked)

        dispatch({
            type: 'ANSWERED-Q',
            payload: option
        })
    }

    /**
     * Performs a submit operation and grades the assesment
     * Bound to "Submit" button and auto-submit on timer end
     */
    function submitTest() {
        if (!(state.testActive)) return

        // grade assesment and show popup
        let score = 0

        let allQuestions = state.allQuestions
        var qCounter = 1
        for (var i in allQuestions) {
            // console.log(allQuestions[i][qCounter])
            let marked = allQuestions[i][qCounter].Marked

            // Take all the marked values and get the score of that particular key and we are good to go
            /**
             * "Choices" : {
             *    "1" : {
             *      "Text" : "Solution 1",
             *      "Score" : "1"  <- The one we are focusing at this point
             *    }...
             */
            let scoreObj = allQuestions[i][qCounter].Choices[Number(marked)]
            if (scoreObj) {
                score += Number(scoreObj.Score)
            }
            qCounter++
        }

        // console.log("total - score", score)

        // set test-active to false
        dispatch({
            type: 'SUBMIT-TEST',
            payload: score
        })
    }

    return (
        <GlobalContext.Provider value={{
            // Toggle states of the test
            testActive: state.testActive,
            testInit: state.testInit,

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