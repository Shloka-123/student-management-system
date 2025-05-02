import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('https://student-management-system-backend-mk6f.onrender.com/students')
      .then(res => setStudents(res.data))
      .catch(err => console.log(err));
  }, []);

  const deleteStudent = (id) => {
    axios.delete(`https://student-management-system-backend-mk6f.onrender.com/students/${id}`)
      .then(() => {
        alert('Student Deleted');
        setStudents(students.filter(s => s._id !== id));
      });
  };

  return (
    <div>
      <h2>Student List</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th><th>Age</th><th>Course</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.course}</td>
              <td>
                <Link to={`/edit/${student._id}`}>Edit</Link> |
                <button onClick={() => deleteStudent(student._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
