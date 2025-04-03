import React from 'react';
import profileImage from './assets/logo.jpg';
import './App.css';  // Ensure this CSS file is linked

function App() {
  return (
    <div className="container">
      <h1>K L University</h1>
      <img src={profileImage} alt="KL University Logo" />
    </div>
  );
}

export default App;