import React from 'react';
import StudentList from './StudentList';
import AddStudentForm from './AddStudentForm';

const StudentManagement = () => {
  return (
    <div>
      <h1>Student Management</h1>
      <StudentList />
      <AddStudentForm />
    </div>
  );
};

export default StudentManagement;
