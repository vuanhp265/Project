import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../../data/level0.json';
import { Table, Badge } from 'react-bootstrap';

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function Level0Table() {
  const [timetable, setTimetable] = useState([]);

  useEffect(() => {
    const scheduleData = [];
    data.forEach((cls) => {
      const slots = cls.schedule.split(","); 
      slots.forEach((slot) => {
        const [day, time] = slot.trim().split(" ");
        scheduleData.push({
          id: cls.id,
          day,
          time,
          className: cls.className,
          teacher: cls.teacher,
          status: cls.status,
        });
      });
    });
    setTimetable(scheduleData);
  }, []);

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

  const uniqueTimes = [...new Set(timetable.map((item) => item.time))].sort();

  const getClassForCell = (day, time) =>
    timetable.filter((t) => t.day === day && t.time === time);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">English Class Schedule 1.0 - 5.0 IELTS</h2>
      <div className="table-responsive">
        <Table bordered hover>
          <thead className="table-light">
            <tr>
              <th>Giờ / Ngày</th>
              {DAYS.map((d) => (
                <th key={d} className="text-center">{d}</th>
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
                      <div key={idx} className="p-2 mb-2 rounded border bg-light">
                        <div className="fw-semibold">{cls.className}</div>
                        <div className="text-muted small">{cls.teacher}</div>
                        <Badge bg={getStatusBadgeClass(cls.status)} className="me-2">
                          {cls.status}
                        </Badge>
                        {/* 👉 Link tới trang chi tiết học sinh */}
                        <Link to={`/class/${cls.id}`} className="btn btn-sm btn-info mt-2 btn btn-dark">
                          Xem học sinh
                        </Link>
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

export default Level0Table;
