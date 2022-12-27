const initialState = {
    counter : 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "increment":
            return{
                ...state,
                counter : state.counter + action.value
            }
        case "decrement":
            return {
                ...state,
                counter: state.counter - action.value
            }

        default:
            return state
    }
}

export default counterReducer