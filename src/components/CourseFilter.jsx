import React from "react";
import { Form } from "react-bootstrap";

export default function CourseFilter({ levels, selected, onChange }) {
  return (
    <div className="mb-4 d-flex justify-content-center">
      <Form.Select style={{ maxWidth: 320 }} value={selected} onChange={(e) => onChange(e.target.value)}>
        {levels.map((lv, i) => (
          <option key={i} value={lv}>{lv}</option>
        ))}
      </Form.Select>
    </div>
  );
}