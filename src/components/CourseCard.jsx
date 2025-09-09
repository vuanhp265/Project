
import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toSlug } from "../utils/slug";

export default function CourseCard({ course }) {
  const slug = toSlug(course.name);
  return (
    <Card className="h-100 shadow-sm course-card">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Card.Title className="mb-0">{course.name}</Card.Title>
          {course.level && (
            <span className="badge text-bg-light border">{course.level}</span>
          )}
        </div>
        <Card.Text className="text-muted">
          {course.description || course.objective}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="bg-white border-top-0">
        <Button as={Link} size="sm" to={`/courses/${slug}`} variant="primary">
          View Details
        </Button>
      </Card.Footer>
    </Card>
  );
}







