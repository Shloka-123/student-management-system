import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import StudentList from './StudentList';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';
import './styles.css';


function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <nav>
          <Link to="/">Home</Link> | <Link to="/students">Student List</Link> | <Link to="/add">Add Student</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/edit/:id" element={<EditStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
