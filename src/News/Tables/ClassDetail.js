import React from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../../data/level0.json';
import { Table } from 'react-bootstrap';

function ClassDetail() {
  const { id } = useParams();
  const classInfo = data.find((item) => item.id === parseInt(id));

  if (!classInfo) {
    return (
      <div className="container mt-4">
        <h2>Không tìm thấy thông tin lớp học.</h2>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Danh sách học sinh - {classInfo.className}</h2>

      <h4>Danh sách học sinh</h4>
      <Table bordered hover striped>
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Họ và tên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
          </tr>
        </thead>
        <tbody>
          {classInfo.students && classInfo.students.length > 0 ? (
            classInfo.students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">Chưa có học sinh</td>
            </tr>
          )}
        </tbody>
      </Table>

      <div className="d-flex justify-content-end gap-2">
        <Link to="/SchedulePage" className="btn btn-secondary">Quay lại</Link>
        <Link to="/RegisterPage" className="btn btn-primary">Đăng ký học sinh mới</Link>
      </div>
    </div>
  );
}

export default ClassDetail;
