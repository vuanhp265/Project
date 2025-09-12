import React from 'react';
import { useParams } from 'react-router-dom';
import dataone from '../../data/level1.json'; // Data import path of level1.json
import { Link } from "react-router-dom";
import { Table, Badge } from "react-bootstrap";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function ClassSchedule() {
  // Hàm chọn màu badge dựa theo trạng thái
  const getStatusBadgeClass = (status) => {
    switch (status.toLowerCase()) {
      case "open":
        return "success";
      case "school is about to start":
        return "warning";
      case "is full":
        return "danger";
      default:
        return "secondary";
    }
  };

  // Tạo dữ liệu bảng: {day, time, className, teacher, status}
  const timetable = [];
  dataone.forEach((cls) => {
    const slots = cls.schedule.split(","); // ví dụ: "Mon 09:00, Wed 09:00"
    slots.forEach((slot) => {
      const [day, time] = slot.trim().split(" ");
      timetable.push({
        day,
        time,
        className: cls.className,
        teacher: cls.teacher,
        status: cls.status,
      });
    });
  });

  // Lấy danh sách tất cả các giờ có trong dữ liệu
  const uniqueTimes = [
    ...new Set(timetable.map((item) => item.time)),
  ].sort();

  // Lấy lớp học cho 1 ngày + giờ
  const getClassForCell = (day, time) =>
    timetable.filter((t) => t.day === day && t.time === time);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Thời Khóa Biểu</h2>
      <div className="table-responsive">
        <Table bordered hover>
          <thead className="table-light">
            <tr>
              <th>Giờ / Ngày</th>
              {DAYS.map((d) => (
                <th key={d} className="text-center">
                  {d}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {uniqueTimes.map((time) => (
              <tr key={time}>
                <td className="fw-bold">{time}</td>
                {DAYS.map((day) => (
                  <td key={day + time}>
                    {getClassForCell(day, time).map((cls, idx) => (
                      <div
                        key={idx}
                        className="p-2 mb-2 rounded border bg-light"
                      >
                        <div className="fw-semibold">{cls.className}</div>
                        <div className="text-muted small">{cls.teacher}</div>
                        <Badge bg={getStatusBadgeClass(cls.status)}>
                          {cls.status}
                        </Badge>
                      </div>
                    ))}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ClassSchedule;