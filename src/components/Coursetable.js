// src/components/Coursetable.js
import React, { useMemo, useState } from "react";
import {
  Modal,
  Button,
  Form,
  Row,
  Col,
  Card,
  Badge,
  InputGroup,
} from "react-bootstrap";
import { BsClock, BsFilter } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import orders from "../data/courselist.json";

export default function CourseTable() {
  const navigate = useNavigate();

  // ---- UI state ----
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const [selectedLevel, setSelectedLevel] = useState("All");
  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState("nameAsc");

  // ---- Derived data ----
  // Ở dữ liệu mẫu của bạn trước đây, filter theo "name". Nếu muốn theo "level", đổi map(...) sang c.level.
  const levels = useMemo(
    () => ["All", ...Array.from(new Set((orders || []).map((c) => c?.name).filter(Boolean)))],
    []
  );

  const handleShowModal = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setSelectedCourse(null);
    setShowModal(false);
  };

  // ---- Catalog pipeline: filter -> search -> sort ----
  const filteredCourses = useMemo(() => {
    let list = Array.isArray(orders) ? orders : [];

    if (selectedLevel !== "All") {
      list = list.filter((c) => c?.name === selectedLevel);
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((c) =>
        [c?.name, c?.description, c?.objective, c?.level, c?.target]
          .filter(Boolean)
          .some((v) => String(v).toLowerCase().includes(q))
      );
    }

    const sorters = {
      nameAsc: (a, b) => String(a?.name || "").localeCompare(String(b?.name || "")),
      nameDesc: (a, b) => String(b?.name || "").localeCompare(String(a?.name || "")),
      levelAsc: (a, b) => String(a?.level || "").localeCompare(String(b?.level || "")),
      durationAsc: (a, b) =>
        (a?.duration || "").toString().localeCompare((b?.duration || "").toString()),
    };

    return list.slice().sort(sorters[sortKey] || sorters.nameAsc);
  }, [selectedLevel, query, sortKey]);

  return (
    <div className="container my-5">
      {/* ===== HERO / TEST FORM (giữ, hoặc bỏ nếu không cần) ===== */}
      <section className="position-relative overflow-hidden rounded-4 p-4 p-md-5 text-white hero-gradient shadow-sm">
        <div className="d-flex flex-column flex-lg-row align-items-center gap-4">
          <div className="text-center text-lg-start flex-fill">
            <h1 className="display-6 fw-bold mb-3">
              IELTS Proficiency Test <Badge bg="light" text="dark">FREE</Badge>
            </h1>
            <p className="lead mb-0 opacity-90">
              Check your current ability and get a tailored study plan instantly.
            </p>
          </div>

          <div className="d-none d-lg-block">
            <div className="callout-badge text-center">
              READY
              <br /> TO
              <br /> START?
            </div>
          </div>
          {/* 2 nút đi thẳng sang trang form */}
          <div className="w-100">
            <Row className="g-2 mt-3">
              <Col md={6}>
                <Button
                  size="lg"
                  className="w-100 fw-semibold shadow-sm cta-btn"
                  onClick={() => navigate("/enroll?type=advice")}
                >
                  Nhận tư vấn lộ trình
                </Button>
              </Col>
              <Col md={6}>
                <Button
                  size="lg"
                  variant="outline-light"
                  className="w-100 fw-semibold shadow-sm"
                  onClick={() => navigate("/enroll?type=test")}
                >
                  Test đầu vào miễn phí
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      {/* ===== CATALOG CONTROLS ===== */}
      <section className="my-5">
        <div className="d-flex flex-wrap gap-3 align-items-center justify-content-between mb-3">
          <h2 className="section-title mb-0">Our Courses</h2>

          <div className="d-flex flex-wrap gap-2">
            <InputGroup>
              <InputGroup.Text>
                <BsFilter aria-hidden="true" />
              </InputGroup.Text>
              <Form.Select
                style={{ minWidth: 180 }}
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                aria-label="Filter by level"
              >
                {levels.map((level, idx) => (
                  <option key={idx} value={level}>{level}</option>
                ))}
              </Form.Select>
            </InputGroup>

            <Form.Select
              style={{ minWidth: 160 }}
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value)}
              aria-label="Sort courses"
            >
              <option value="nameAsc">Name A→Z</option>
              <option value="nameDesc">Name Z→A</option>
              <option value="levelAsc">Level A→Z</option>
              <option value="durationAsc">Duration ↑</option>
            </Form.Select>

            <Form.Control
              style={{ minWidth: 220 }}
              type="search"
              placeholder="Search by name, target, ..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search courses"
            />
          </div>
        </div>

        <Row>
          {filteredCourses.map((item) => (
            <Col md={6} lg={4} className="mb-4" key={item?.id ?? item?.name}>
              <Card className="h-100 shadow-sm course-card position-relative overflow-hidden">
                {/* Media */}
                <div className="media-wrap position-relative">
                  <img
                    src={item?.image || "/images/course-placeholder.jpg"}
                    alt={item?.name || "Course thumbnail"}
                    className="w-100 object-fit-cover"
                    style={{ aspectRatio: "16 / 9" }}
                  />
                  {/* Corner pill (top-right) for aiming/current level */}
                  <div className="corner-pill">
                    {item?.target ? (
                      <>Aiming&nbsp;<strong>{item.target}</strong></>
                    ) : item?.level ? (
                      <>Level&nbsp;<strong>{item.level}</strong></>
                    ) : (
                      <>Level&nbsp;<strong>N/A</strong></>
                    )}
                  </div>
                  {/* Overlay headline at bottom of image */}
                  <div className="card-hero-overlay">
                    <div className="d-flex align-items-center gap-2 mb-1">
                      {item?.level && (
                        <Badge bg="light" text="dark" className="rounded-pill px-2 py-1">{item.level}</Badge>
                      )}
                      {item?.duration && (
                        <Badge bg="dark" className="rounded-pill px-2 py-1">
                          <BsClock className="me-1" />
                          {item.duration}
                        </Badge>
                      )}
                    </div>
                    <h3 className="h5 m-0 fw-bold text-truncate" title={item?.name}>
                      {item?.name || "Untitled Course"}
                    </h3>
                  </div>
                </div>

                <Card.Body className="d-flex flex-column pt-3">
                  <Card.Text className="text-muted flex-grow-1 clamp-3">
                    {item?.description || item?.objective || "No description provided."}
                  </Card.Text>

                  <div className="d-flex align-items-center justify-content-between mt-1 w-100">
                    {item?.duration ? (
                      <div className="d-flex align-items-center gap-1 text-secondary small">
                        <BsClock aria-hidden="true" />
                        <span>{item.duration}</span>
                      </div>
                    ) : <span />}

                    <div className="d-flex gap-2 w-100">
                      <Button
                        size="md"
                        className="flex-grow-1 fw-semibold"
                        variant="primary"
                        onClick={() =>
                          navigate(
                            `/enroll?type=course&courseId=${encodeURIComponent(item?.id ?? "")}&courseName=${encodeURIComponent(item?.name ?? "")}`
                          )
                        }
                      >
                        Đăng ký ngay
                      </Button>
                      <Button
                        size="md"
                        variant="outline-secondary"
                        onClick={() =>
                          navigate(
                            `/enroll?type=test&courseId=${encodeURIComponent(item?.id ?? "")}&courseName=${encodeURIComponent(item?.name ?? "")}`
                          )
                        }
                      >
                        Test đầu vào
                      </Button>
                      <Button size="md" variant="outline-primary" onClick={() => handleShowModal(item)}>
                        Chi tiết
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}

          {filteredCourses.length === 0 && (
            <div className="text-center text-muted py-5">No courses found. Try clearing filters.</div>
          )}
        </Row>

        {/* ===== Course Detail Modal (xem nhanh) ===== */}
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedCourse?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="mb-2">{selectedCourse?.description || selectedCourse?.objective}</p>
            {selectedCourse?.target && (
              <p className="mb-1"><strong>Target:</strong> {selectedCourse.target}</p>
            )}
            {selectedCourse?.level && (
              <p className="mb-1"><strong>Level:</strong> {selectedCourse.level}</p>
            )}
            {selectedCourse?.duration && (
              <p className="mb-1"><strong>Duration:</strong> {selectedCourse.duration}</p>
            )}
            {Array.isArray(selectedCourse?.special_features) && selectedCourse.special_features.length > 0 && (
              <div className="mt-3">
                <strong>Special Features:</strong>
                <ul className="mb-0 mt-2">
                  {selectedCourse.special_features.map((f, i) => (<li key={i}>{f}</li>))}
                </ul>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>Đóng</Button>
            <Button
              onClick={() => {
                const item = selectedCourse || {};
                handleCloseModal();
                navigate(
                  `/enroll?type=course&courseId=${encodeURIComponent(item?.id ?? "")}&courseName=${encodeURIComponent(item?.name ?? "")}`
                );
              }}
            >
              Đăng ký khóa học
            </Button>
          </Modal.Footer>
        </Modal>
      </section>

      {/* Styles (gộp vào 1 <style> duy nhất để tránh lỗi template) */}
      <style>{`
        .hero-gradient {
          background:
            radial-gradient(1200px 400px at 10% -20%, rgba(255,255,255,0.12), transparent),
            linear-gradient(135deg, #1e3a8a 0%, #0ea5e9 60%, #22d3ee 100%);
          border-radius: 20px;
        }
        .callout-badge {
          width: 140px; height: 140px; border-radius: 999px; background: #ef4444; color: #fff;
          display: grid; place-items: center; font-weight: 800; line-height: 1.05; box-shadow: 0 10px 30px rgba(0,0,0,.25);
          border: 6px solid rgba(255,255,255,.35);
        }
        .cta-btn { background: #111827; border: none; }
        .cta-btn:hover { background: #0b1220; }
        .section-title { font-weight: 800; letter-spacing: -0.02em; }

        .course-card { transition: transform .15s ease, box-shadow .15s ease; border: 1px solid rgba(2,6,23,.06); border-radius: 16px; overflow: hidden; }
        .course-card:hover { transform: translateY(-6px) scale(1.01); box-shadow: 0 22px 40px rgba(2,6,23,0.18); }

        .media-wrap img { border-bottom: 1px solid rgba(0,0,0,.05); }
        .object-fit-cover { object-fit: cover; }

        .corner-pill {
          position: absolute; top: 12px; right: 12px; padding: 6px 12px;
          background: rgba(17, 24, 39, 0.75); color: #fff; border-radius: 999px;
          backdrop-filter: blur(6px); font-size: 12px; box-shadow: 0 6px 18px rgba(0,0,0,.25);
        }

        .card-hero-overlay {
          position: absolute; left: 0; right: 0; bottom: 0; padding: 14px 16px 12px;
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(10,10,10,0.55) 55%, rgba(10,10,10,0.85) 100%);
          color: #fff;
        }

        .clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
