import React, { useState } from "react";
import { login } from "../store";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const handleSubmit = () => {
    login(email, password);
    history.push("/createtrip");
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="form-group mt-5">
            <label htmlFor="email">Email address</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              className="form-control"
              id="password"
            />
          </div>
          <button onClick={handleSubmit} className="btn btn-primary">
            Submit
          </button>
        </Col>
      </Row>
    </Container>
  );
}
