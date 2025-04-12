import React, { useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import './index.css';

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents(prev => [...prev, student]);
  };

  const clearStudents = () => {
    setStudents([]);
  };

  return (
    <div className="container">
      <h1>Student Grade Manager</h1>
      <StudentForm onAddStudent={addStudent} />
      <StudentList students={students} onClear={clearStudents} />
    </div>
  );
}

export default App;