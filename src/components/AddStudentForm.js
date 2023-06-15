import React, { useState } from 'react';

const AddStudentForm = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [enrollmentDetails, setEnrollmentDetails] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, contact, enrollmentDetails }),
      });
      const data = await response.json();
      console.log(data); // handle success scenario
    } catch (error) {
      console.error(error); // handle error scenario
    }
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Contact:
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </label>
        <br />
        <label>
          Enrollment Details:
          <input
            type="text"
            value={enrollmentDetails}
            onChange={(e) => setEnrollmentDetails(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudentForm;
