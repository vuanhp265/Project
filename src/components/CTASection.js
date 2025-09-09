import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function CTASection({
title = "Ready to start?",
subtitle = "Nhận tư vấn lộ trình & test đầu vào miễn phí.",
primaryLabel = "Nhận tư vấn",
secondaryLabel = "Đăng ký test đầu vào",
to = "/enroll",
className = "",
}) {
const navigate = useNavigate();


return (
<div className={`cta-stripe py-5 my-5 ${className}`}>
<Container>
<Row className="align-items-center g-4">
<Col lg={8}>
<h2 className="mb-2 fw-bold">{title}</h2>
<p className="mb-0 text-muted fs-5">{subtitle}</p>
</Col>
<Col lg={4} className="text-lg-end">
<div className="d-flex gap-2 justify-content-lg-end">
<Button
size="lg"
onClick={() => navigate(`${to}?type=advice`)}
>
{primaryLabel}
</Button>
<Button
size="lg"
variant="outline-secondary"
onClick={() => navigate(`${to}?type=test`)}
>
{secondaryLabel}
</Button>
</div>
</Col>
</Row>
</Container>


{/* Inline style (move to CSS file in prod) */}
<style>{`
.cta-stripe {
background: radial-gradient(90% 300px at 10% -40%, rgba(255,255,255,.25), transparent),
linear-gradient(135deg, #0ea5e9 0%, #22d3ee 50%, #6ee7b7 100%);
color: #0b1220;
border-radius: 20px;
}
.cta-stripe h2 { letter-spacing: -0.02em; }
`}</style>
</div>
);
}