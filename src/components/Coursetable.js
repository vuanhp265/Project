import React from 'react';
import orders from "../data/courselist.json";

function CourseTable() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 title-highlight">Danh sách khóa học</h2>
      <div className="row">
        {orders.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card course-card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title course-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="course-level"><strong>Trình độ:</strong> {item.level}</p>
              </div>
              <div className="card-footer bg-white border-top-0">
                <button className="btn btn-outline-primary btn-sm">Xem chi tiết</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseTable;
