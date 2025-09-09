// src/pages/EnrollmentForm.js
import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Alert, Card } from "react-bootstrap";

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function EnrollmentForm() {
  const q = useQuery();
  const navigate = useNavigate();

  const intent = q.get("type") || "advice"; // advice | test | course
  const courseId = q.get("courseId");
  const courseName = q.get("courseName");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    preferredTime: "",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const titleMap = {
    advice: "Nhận tư vấn lộ trình",
    test: "Đăng ký test đầu vào",
    course: "Đăng ký khóa học",
  };

  const subtitle = courseName
    ? `Khoá: ${courseName}`
    : intent === "advice"
    ? "Để lại thông tin, chúng tôi sẽ tư vấn lộ trình phù hợp."
    : intent === "test"
    ? "Đăng ký test miễn phí để biết trình độ hiện tại."
    : "Điền thông tin để chúng tôi liên hệ hoàn tất đăng ký.";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const payload = {
        type: intent,
        courseId,
        courseName,
        ...form,
        submittedAt: new Date().toISOString(),
      };

      // Demo only
      console.log("ENROLL PAGE SUBMIT", payload);

      // Example for backend:
      // const res = await fetch('/api/enroll.php', {
      //   method:'POST',
      //   headers:{'Content-Type':'application/json'},
      //   body: JSON.stringify(payload)
      // });
      // if (!res.ok) throw new Error('Submit failed');

      navigate("/thank-you?from=enroll");
    } catch (err) {
      setError(err.message || "Đã có lỗi xảy ra");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          <Card className="shadow-sm border-0">
            <Card.Body className="p-4 p-md-5">
              <h1 className="h3 fw-bold mb-2">{titleMap[intent] || "Đăng ký"}</h1>
              <p className="text-muted mb-4">{subtitle}</p>

              {error && <Alert variant="danger" className="mb-4">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Label>Họ và tên</Form.Label>
                    <Form.Control name="name" value={form.name} onChange={handleChange} required />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Số điện thoại</Form.Label>
                    <Form.Control name="phone" value={form.phone} onChange={handleChange} required />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={form.email} onChange={handleChange} required />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Thành phố / Cơ sở gần bạn</Form.Label>
                    <Form.Control name="city" value={form.city} onChange={handleChange} />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Thời gian mong muốn</Form.Label>
                    <Form.Control
                      name="preferredTime"
                      value={form.preferredTime}
                      onChange={handleChange}
                      placeholder="VD: Tối T3/T5"
                    />
                  </Col>
                  <Col xs={12}>
                    <Form.Label>Ghi chú</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="notes"
                      value={form.notes}
                      onChange={handleChange}
                      placeholder="Mục tiêu IELTS, thời gian rảnh, ..."
                    />
                  </Col>
                  <Col xs={12} className="d-grid mt-2">
                    <Button type="submit" size="lg" disabled={submitting}>
                      {submitting ? "Đang gửi..." : "Gửi thông tin"}
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <style>{`
        .form-page-hero { background: #f8fafc; border-radius: 16px; }
      `}</style>
    </Container>
  );
}
