export const SET_COURSES = "SET_COURSES"
export const SET_TEACHERS = "SET_TEACHERS"
export const SET_FAQS = "SET_FAQS"

export const setCourses = (pack) => (dispatch) => {
    dispatch({
        type: SET_COURSES,
        payload: pack,
    });
};

export const setTeachers = (pack) => (dispatch) => {
    dispatch({
        type: SET_TEACHERS,
        payload: pack,
    });
};

export const setFaqs = (pack) => (dispatch) => {
    dispatch({
        type: SET_FAQS,
        payload: pack,
    });
};