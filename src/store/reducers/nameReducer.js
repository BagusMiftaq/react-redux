import {SET_FIRST_NAME, SET_LAST_NAME} from "../type/userInfoTypes";

const initialState = {
    firstName : "",
    lastName : ""
}

const nameReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_FIRST_NAME:
            return{
                ...state,
                firstName: action.value
            }
        case SET_LAST_NAME:
            return {
                ...state,
                lastName: action.value
            }
        default:
            return state
    }
}

export default nameReducer