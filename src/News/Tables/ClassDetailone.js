import React from 'react';
import { useParams } from 'react-router-dom';
import dataone from '../../data/level1.json'; // Data import path of level1.json
import { Link } from "react-router-dom";
function ClassDetailone() {
  const { id } = useParams();
  const classInfo = dataone.find((item) => item.id === parseInt(id));
  if (!classInfo) {
    return <div className="container mt-4"><h2>No class information found.</h2></div>;
  }

  const getStatusBadgeClass = (status) => {
    switch (status.toLowerCase()) {
      case 'open':
        return 'badge-success';
      case 'school is about to start':
        return 'badge-warning';
      case 'is full':
        return 'badge-danger';
      default:
        return 'badge-secondary';
    }
  };

  return (
    <div className="container mt-4">
      <h2>Class Details</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{classInfo.className}</h5>
          <p className="card-text"><strong>Level:</strong> {classInfo.level}</p>
          <p className="card-text"><strong>Start Date:</strong> {classInfo.startDate}</p>
          <p className="card-text"><strong>End Date:</strong> {classInfo.endDate}</p>
          <p className="card-text"><strong>Schedule:</strong> {classInfo.schedule}</p>
          <p className="card-text"><strong>Teacher:</strong> {classInfo.teacher}</p>
          { /* Add more details if needed */}
        </div>
        
      </div>
    </div>
  );
}

export default ClassDetailone;