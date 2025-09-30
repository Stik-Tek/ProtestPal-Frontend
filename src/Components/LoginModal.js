import React, { useState } from 'react';
import { Modal, Form, Button, Alert } from 'react-bootstrap';

function LoginModal({ show, onHide, onSwitchToSignUp }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // For MVP, just show success message
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onHide();
    }, 2000);
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Login to ProtestPal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {showSuccess && (
          <Alert variant="success">Login successful! (Demo mode)</Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form>
        <div className="text-center mt-3">
          <p>Don't have an account?{' '}
            <Button variant="link" onClick={onSwitchToSignUp}>
              Sign Up
            </Button>
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default LoginModal;
