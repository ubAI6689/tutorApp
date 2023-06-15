import * as api from '../api';
import { FETCH_STUDENTS, CREATE_STUDENT, UPDATE_STUDENT, DELETE_STUDENT } from '../constants/actionTypes';

// Action Creators
export const fetchStudents = () => async (dispatch) => {
  try {
    const { data } = await api.fetchStudents();
    dispatch({ type: FETCH_STUDENTS, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const createStudent = (studentData) => async (dispatch) => {
  try {
    const { data } = await api.createStudent(studentData);
    dispatch({ type: CREATE_STUDENT, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const updateStudent = (id, studentData) => async (dispatch) => {
  try {
    const { data } = await api.updateStudent(id, studentData);
    dispatch({ type: UPDATE_STUDENT, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const deleteStudent = (id) => async (dispatch) => {
  try {
    await api.deleteStudent(id);
    dispatch({ type: DELETE_STUDENT, payload: id });
  } catch (error) {
    console.error(error);
  }
};
