import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // For MVP, just show success message
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 3000);
  };

  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h1 className="display-4 mb-4">Contact Us</h1>
          <p className="lead">
            Have questions? We're here to help!
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <h4>Send Us a Message</h4>
              {submitted && (
                <Alert variant="success">
                  Thank you! Your message has been sent. We'll get back to you soon.
                </Alert>
              )}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="What is this regarding?"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="How can we help you?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="mb-3">
            <Card.Body>
              <h4>Contact Information</h4>
              <div className="mb-3">
                <h6>Email</h6>
                <p>info@stik-tek.com</p>
              </div>
              <div className="mb-3">
                <h6>Website</h6>
                <p>
                  <a href="https://protestpalapp.com" target="_blank" rel="noopener noreferrer">
                    protestpalapp.com
                  </a>
                </p>
              </div>
              <div className="mb-3">
                <h6>GitHub</h6>
                <p>
                  <a href="https://github.com/stik-tek" target="_blank" rel="noopener noreferrer">
                    github.com/stik-tek
                  </a>
                </p>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h4>Office Hours</h4>
              <p>
                Our support team is available to assist you during the following hours:
              </p>
              <ul>
                <li>Monday - Friday: 9:00 AM - 6:00 PM CST</li>
                <li>Saturday: 10:00 AM - 4:00 PM CST</li>
                <li>Sunday: Closed</li>
              </ul>
              <p className="mb-0">
                <small className="text-muted">
                  Note: This is an MVP demonstration. In production, these would be actual support hours.
                </small>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactPage;
