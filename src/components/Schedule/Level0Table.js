import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../../data/level0.json'; // Đường dẫn import dữ liệu
import '../App.css';

function Level0Table() {
  const [classSchedule, setClassSchedule] = useState([]);

  useEffect(() => {
    setClassSchedule(data);
  }, []);

  const getStatusBadgeClass = (status) => {
    switch (status.toLowerCase()) {
      case 'đang mở':
        return 'badge-success';
      case 'sắp khai giảng':
        return 'badge-warning';
      case 'đã đầy':
        return 'badge-danger';
      default:
        return 'badge-secondary';
    }
  };

  return (
    <div className="container mt-4">
      <h2>Lịch Khai Giảng Lớp Tiếng Anh 1.0-5.0 IELTS</h2>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Tên Lớp</th>
            <th>Trình Độ</th>
            <th>Ngày Bắt Đầu</th>
            <th>Ngày Kết Thúc</th>
            <th>Lịch Học</th>
            <th>Giáo Viên</th>
            <th>Trạng Thái</th>
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
                  Xem Chi Tiết
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