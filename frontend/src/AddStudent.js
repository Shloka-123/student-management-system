import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddStudent() {
  const [student, setStudent] = useState({ name: '', age: '', course: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://student-management-system-backend-mk6f.onrender.com/students', student)
      .then(() => {
        alert('Student Added');
        navigate('/students');
      })
      .catch((err) => {
        console.error('Error adding student:', err);
        alert('Failed to add student.');
      });
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={student.name}
          onChange={(e) => setStudent({ ...student, name: e.target.value })}
        /><br />
        <input
          type="number"
          placeholder="Age"
          value={student.age}
          onChange={(e) => setStudent({ ...student, age: e.target.value })}
        /><br />
        <input
          type="text"
          placeholder="Course"
          value={student.course}
          onChange={(e) => setStudent({ ...student, course: e.target.value })}
        /><br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddStudent;
