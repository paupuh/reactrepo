import React from 'react';
import '../styles/EmployeeRow.css';

function EmployeeRow({ firstName, lastName, position, description, photo, isReversed }) {
  return (
    <div className={`employee-row ${isReversed ? 'reversed' : ''}`}>
      <div className="employee-photo" style={{ backgroundImage: `url(${photo})` }}></div>
      <div className="employee-info">
        <h3>{firstName} {lastName}</h3>
        <h4>{position}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default EmployeeRow;
