import React, { useEffect, useState } from 'react';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch('/api/students');
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Student List</h1>
      {students.map((student) => (
        <div key={student._id}>
          <h3>{student.name}</h3>
          <p>Contact: {student.contact}</p>
          <p>Enrollment Details: {student.enrollmentDetails}</p>
        </div>
      ))}
    </div>
  );
};

export default StudentList;
