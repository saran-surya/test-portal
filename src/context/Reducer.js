let reducer = (state, action) => {
    switch (action.type) {
        case 'SET-INITIAL':
            // console.log("Rendering-down and setting the questions")
            console.log(action.payload)
            state.allQuestions = action.payload
            state.totalQuestions = (action.payload).length
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

        case 'NEXT-Q':
            // console.log('Moving to next question')
            state.qNo = action.payload
            return {
                ...state
            }

        case 'PREV-Q':
            // console.log('Moving to previous question')
            console.log(action.payload)
            state.qNo = action.payload
            return {
                ...state
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
            console.log(state.allQuestions[state.currQ][(state.currQ) + 1])
            state.allQuestions[state.currQ][(state.currQ) + 1].Qstate = "ANSWERED"
            state.allQuestions[state.currQ][(state.currQ) + 1].Marked =  action.payload
            return {
                ...state
            }

        case 'SUBMIT-TEST': {
            // console.log("Submitting the test assesment")
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