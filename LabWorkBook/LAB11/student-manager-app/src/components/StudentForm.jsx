import React, { useState } from 'react';
import Student from '../Student';

function StudentForm({ onAddStudent }) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [marks, setMarks] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = new Student(id, name, parseInt(marks));
    onAddStudent(newStudent);
    setId('');
    setName('');
    setMarks('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} required />
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="number" placeholder="Marks" value={marks} onChange={(e) => setMarks(e.target.value)} required />
      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;