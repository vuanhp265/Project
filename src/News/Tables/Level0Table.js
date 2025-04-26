import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../../data/level0.json'; // Data import path

function Level0Table() {
  const [classSchedule, setClassSchedule] = useState([]);

  useEffect(() => {
    setClassSchedule(data);
  }, []);

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
      <h2>English Class Schedule 1.0-5.0 IELTS</h2>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Class Name</th>
            <th>Level</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Schedule</th>
            <th>Teacher</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {classSchedule.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td><Link to={`/class/${item.id}`}>{item.className}</Link></td>
              <td>{item.level}</td>
              <td>{item.startDate}</td>
              <td>{item.endDate}</td>
              <td>{item.schedule}</td>
              <td>{item.teacher}</td>
              <td>
                <span className={`badge ${getStatusBadgeClass(item.status)}`}>
                  {item.status}
                </span>
              </td>
              <td>
                <Link to={`/class/${item.id}`} className="btn btn-sm btn-info">
                  See Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Level0Table;