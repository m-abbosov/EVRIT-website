import {SET_COURSES, SET_FAQS, SET_TEACHERS} from "./actions";

const initialState = {
    faqs: [],
    teachers: [],
    courses: []
}

function Reducer(state = initialState, action) {
    switch (action.type) {
        case SET_FAQS:
            return {
                ...state,
                faqs: action.payload
            }
        case SET_COURSES:
            return {
                ...state,
                courses: action.payload
            }
        case SET_TEACHERS:
            return {
                ...state,
                teachers: action.payload
            };
        default:
            return state;
    }
}

export {Reducer}