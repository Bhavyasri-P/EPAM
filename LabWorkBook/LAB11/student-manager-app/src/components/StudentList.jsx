import React, { useEffect } from 'react';

function StudentList({ students, onClear }) {
  useEffect(() => {
    console.log('Student list updated', students);
  }, [students]);

  return (
    <div className="list">
      <h2>Students</h2>
      {students.length === 0 ? (
        <p>No students added.</p>
      ) : (
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              {student.name} (ID: {student.id}) - Marks: {student.marks}, Grade: <strong>{student.grade}</strong>
            </li>
          ))}
        </ul>
      )}
      <button onClick={onClear} className="clear-btn">Clear All</button>
    </div>
  );
}

export default StudentList;