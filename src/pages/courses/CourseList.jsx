import React, { useMemo, useState } from "react";
import { Form } from "react-bootstrap";
import CourseCard from "../../components/CourseCard";
import CourseFilter from "../../components/CourseFilter";
import orders from "../../data/courselist.json";

export default function CourseList() {
  const [selectedLevel, setSelectedLevel] = useState("All");

  const levels = useMemo(() => [
    "All",
    ...Array.from(new Set(orders.map((c) => c.name)))
  ], []);

  const filtered = useMemo(() => (
    selectedLevel === "All" ? orders : orders.filter((c) => c.name === selectedLevel)
  ), [selectedLevel]);

  return (
    <div className="container my-5">
      <header className="text-center mb-4">
        <h1 className="mb-2">Our Courses</h1>
        <p className="text-muted mb-0">Chọn khoá phù hợp mục tiêu IELTS của bạn</p>
      </header>

      <CourseFilter levels={levels} selected={selectedLevel} onChange={setSelectedLevel} />

      <div className="row">
        {filtered.map((item) => (
          <div className="col-md-6 col-lg-4 mb-4" key={item.id}>
            <CourseCard course={item} />
          </div>
        ))}
      </div>
    </div>
  );
}