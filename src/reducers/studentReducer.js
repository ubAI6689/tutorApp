import { FETCH_STUDENTS, CREATE_STUDENT, UPDATE_STUDENT, DELETE_STUDENT } from '../constants/actionTypes';

const initialState = {
  students: [],
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDENTS:
      return {
        ...state,
        students: action.payload,
      };
    case CREATE_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    case UPDATE_STUDENT:
      return {
        ...state,
        students: state.students.map((student) =>
          student._id === action.payload._id ? action.payload : student
        ),
      };
    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter((student) => student._id !== action.payload),
      };
    default:
      return state;
  }
};

export default studentReducer;
