let reducer = (state, action) => {
    switch (action.type) {
        case 'SET-INITIAL':
            // console.log("Rendering-down and setting the questions")

            state.allQuestions = action.payload.allQuestions
            state.totalQuestions = (action.payload.allQuestions).length
            state.sections = action.payload.sections
            state.testActive = true
            state.testInit = false
            return {
                ...state
            }

        case 'SET-Q': {
            // console.log("Setting the next active question")
            state.currQ = action.payload
            return{
                ...state
            }
        }


        case 'MARKED-Q':
            // console.log('Marking question for review')
            console.log(state.allQuestions[state.currQ][(state.currQ) + 1])
            state.allQuestions[state.currQ][(state.currQ) + 1].Qstate = "MARKED"
            return {
                ...state
            }

        case 'ANSWERED-Q':
            // console.log('Answered the question')
            // Every question with the answer selected will toggle the Qstate to the pre-defined vars
            state.allQuestions[state.currQ][(state.currQ) + 1].Qstate = "ANSWERED"
            state.allQuestions[state.currQ][(state.currQ) + 1].Marked =  action.payload
            return {
                ...state
            }

        case 'SUBMIT-TEST': {
            // console.log("Submitting the test assesment")
            state.testActive = false
            state.totalScore = action.payload.totalScore

            state.correctAnswers = action.payload.correctAnswers
            state.wrongAnswers = action.payload.wrongAnswers
            state.unAnswered =  action.payload.unAnswered

            console.log(action.payload)

            return {
                ...state
            }
        }


        default:
            return {
                ...state
            }
    }
}

export default reducer