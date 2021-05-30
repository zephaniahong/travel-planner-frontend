import React, { useState } from "react";
import { Row, Col, Toast } from "react-bootstrap";

export default function Notification({ show, setToast }) {
  return (
    <Row>
      <Col xs={6}>
        <Toast
          className="toast-add"
          onClose={() => setToast(false)}
          show={show}
          delay={2500}
          autohide
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Item added to liked!</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}
