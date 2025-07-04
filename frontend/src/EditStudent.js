import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditStudent() {
  const { id } = useParams();
  const [student, setStudent] = useState({ name: '', age: '', course: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://student-management-system-backend-mk6f.onrender.com/students/${id}`)
      .then(res => setStudent(res.data))
      .catch(err => console.error('Error fetching student:', err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://student-management-system-backend-mk6f.onrender.com/students/${id}`, student)
      .then(() => {
        alert('Student Updated');
        navigate('/students');
      });
  };

  return (
    <div>
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={student.name}
          onChange={(e) => setStudent({ ...student, name: e.target.value })}
        /><br />
        <input
          type="number"
          value={student.age}
          onChange={(e) => setStudent({ ...student, age: e.target.value })}
        /><br />
        <input
          type="text"
          value={student.course}
          onChange={(e) => setStudent({ ...student, course: e.target.value })}
        /><br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditStudent;
