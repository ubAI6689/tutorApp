import axios from 'axios';

const baseURL = 'http://localhost:5000/students'; // Modify the baseURL to match your server setup

// Define your API functions
export const fetchStudents = () => axios.get(baseURL);
export const createStudent = (newStudent) => axios.post(baseURL, newStudent);
export const updateStudent = (id, updatedStudent) => axios.patch(`${baseURL}/${id}`, updatedStudent);
export const deleteStudent = (id) => axios.delete(`${baseURL}/${id}`);
