import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Badge, Button, Card, Nav } from "react-bootstrap";
import orders from "../../data/courselist.json";
import { toSlug } from "../../utils/slug";
import "./course.css";

export default function CourseDetail() {
  const { slug } = useParams();

  const course = useMemo(() => {
    return orders.find((c) => toSlug(c.name) === slug);
  }, [slug]);

  if (!course) {
    return (
      <div className="container py-5">
        <h1 className="mb-3">Course not found</h1>
        <p>We couldn't find the course you're looking for.</p>
        <Button as={Link} to="/courses" variant="primary">Back to Courses</Button>
      </div>
    );
  }

  return (
    <div className="container my-4 my-lg-5">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-3">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item"><Link to="/courses">Courses</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{course.name}</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="course-hero p-4 p-lg-5 mb-4">
        <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-3 gap-lg-4">
          <div className="flex-grow-1">
            <h1 className="mb-2">{course.name}</h1>
            <p className="mb-3 mb-lg-4 lead">
              {course.description || course.objective}
            </p>
            <div className="d-flex flex-wrap gap-2 align-items-center">
              {course.level && <span className="badge badge-level">Level: {course.level}</span>}
              {course.duration && <span className="badge badge-level">Duration: {course.duration}</span>}
              {course.target && <span className="badge badge-level">Target: {course.target}</span>}
            </div>
          </div>
          <div className="ms-lg-auto">
            <Card className="shadow-sm sticky-cta" style={{ minWidth: 280 }}>
              <Card.Body>
                <Card.Title className="mb-2">Ready to start?</Card.Title>
                <Card.Text className="text-muted">Nhận tư vấn lộ trình & test đầu vào miễn phí.</Card.Text>
                <div className="d-grid gap-2">
                  <Button variant="primary">Book Placement Test</Button>
                  <Button variant="outline-primary">Talk to Advisor</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>

      {/* Content with tabs */}
      <section className="row g-4">
        <div className="col-lg-8">
          <Card className="section-card shadow-sm">
            <Card.Body>
              <Nav variant="pills" defaultActiveKey="#overview" className="mb-3 flex-wrap">
                <Nav.Item>
                  <Nav.Link href="#overview">Overview</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#outcomes">Learning Outcomes</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#syllabus">Syllabus</Nav.Link>
                </Nav.Item>
                {Array.isArray(course.special_features) && course.special_features.length > 0 && (
                  <Nav.Item>
                    <Nav.Link href="#features">Special Features</Nav.Link>
                  </Nav.Item>
                )}
              </Nav>

              <div id="overview" className="mb-4">
                <h5 className="mb-2">Overview</h5>
                <p className="text-muted mb-0">{course.description || course.objective}</p>
              </div>

              <div id="outcomes" className="mb-4">
                <h5 className="mb-2">Learning Outcomes</h5>
                {Array.isArray(course.outcomes) ? (
                  <ul className="mb-0">
                    {course.outcomes.map((o, idx) => <li key={idx}>{o}</li>)}
                  </ul>
                ) : (
                  <p className="text-muted">{course.target || "—"}</p>
                )}
              </div>

              <div id="syllabus" className="mb-4">
                <h5 className="mb-2">Syllabus</h5>
                {Array.isArray(course.syllabus) ? (
                  <ol className="mb-0">
                    {course.syllabus.map((s, idx) => <li key={idx}>{s}</li>)}
                  </ol>
                ) : (
                  <p className="text-muted">Updating…</p>
                )}
              </div>

              {Array.isArray(course.special_features) && course.special_features.length > 0 && (
                <div id="features" className="mb-2">
                  <h5 className="mb-2">Special Features</h5>
                  <ul className="mb-0">
                    {course.special_features.map((f, idx) => <li key={idx}>{f}</li>)}
                  </ul>
                </div>
              )}
            </Card.Body>
          </Card>
        </div>

        <div className="col-lg-4">
          <Card className="shadow-sm">
            <Card.Body>
              <h5 className="mb-3">Course Info</h5>
              <div className="d-grid gap-2 small">
                <div className="d-flex justify-content-between"><span>Level</span><strong>{course.level || "N/A"}</strong></div>
                <div className="d-flex justify-content-between"><span>Duration</span><strong>{course.duration || "—"}</strong></div>
                <div className="d-flex justify-content-between"><span>Target</span><strong>{course.target || "—"}</strong></div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>
    </div>
  );
}