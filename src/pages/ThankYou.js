// src/pages/ThankYou.js
import React from "react";
import { Container } from "react-bootstrap";

export default function ThankYou() {
  return (
    <Container className="py-5 text-center">
      <h1 className="fw-bold mb-2">Cảm ơn bạn!</h1>
      <p className="text-muted">
        Chúng tôi đã nhận được thông tin. Tư vấn viên sẽ liên hệ trong thời gian sớm nhất.
      </p>
    </Container>
  );
}
