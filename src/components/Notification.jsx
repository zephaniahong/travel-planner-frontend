import React from "react";
import { Row, Col, Toast } from "react-bootstrap";

export default function Notification({ show, setToast, itemMsg }) {
  return (
    <Row>
      <Col>
        <Toast
          className="toast-add"
          onClose={() => setToast(false)}
          show={show}
          delay={1800}
          autohide
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">❤️ Saved</strong>
          </Toast.Header>
          <Toast.Body>
            {itemMsg.name} is now a liked {itemMsg.type} item!
          </Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}
