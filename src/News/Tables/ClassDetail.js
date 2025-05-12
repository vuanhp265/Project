import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/level0.json'; // Data import path of level0.json
import { Link } from "react-router-dom";
function ClassDetail() {
  const { id } = useParams();
  const classInfo = data.find((item) => item.id === parseInt(id));
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
       <div className="d-grid gap-2 d-md-flex justify-content-md-end p-3">
       <Link to="/Register" className="btn btn-primary">
            Register
        </Link>
        <Link to="/SchedulePage" className="btn btn-danger">
            Cancel
        </Link>
                
              </div>
    </div>
  );
}

export default ClassDetail;