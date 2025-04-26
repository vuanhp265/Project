import React from 'react';
import { useParams } from 'react-router-dom';
import dataone from '../../data/level1.json'; // Đường dẫn import dữ liệu của level1.json
function ClassDetailone() {
  const { id } = useParams();
  const classInfo = dataone.find((item) => item.id === parseInt(id));
  if (!classInfo) {
    return <div className="container mt-4"><h2>Không tìm thấy thông tin lớp học.</h2></div>;
  }

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
      <h2>Chi Tiết Lớp Học</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{classInfo.className}</h5>
          <p className="card-text"><strong>Trình Độ:</strong> {classInfo.level}</p>
          <p className="card-text"><strong>Ngày Bắt Đầu:</strong> {classInfo.startDate}</p>
          <p className="card-text"><strong>Ngày Kết Thúc:</strong> {classInfo.endDate}</p>
          <p className="card-text"><strong>Lịch Học:</strong> {classInfo.schedule}</p>
          <p className="card-text"><strong>Giáo Viên:</strong> {classInfo.teacher}</p>
          <p className="card-text"><strong>Trạng Thái:</strong> <span className={`badge ${getStatusBadgeClass(classInfo.status)}`}>{classInfo.status}</span></p>
          {/* Thêm các thông tin chi tiết khác nếu cần */}
        </div>
      </div>
    </div>
  );
}

export default ClassDetailone;