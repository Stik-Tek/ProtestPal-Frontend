import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Alert, ProgressBar } from 'react-bootstrap';

function FileProtestPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    propertyAddress: '',
    ownerName: '',
    email: '',
    phone: '',
    reason: '',
    evidenceDescription: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const steps = [
    'Property Information',
    'Contact Details',
    'Protest Reason',
    'Review & Submit'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  if (submitted) {
    return (
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Alert variant="success">
              <Alert.Heading>Protest Submitted Successfully!</Alert.Heading>
              <p>
                Your property tax protest has been submitted. Here's what happens next:
              </p>
              <ul>
                <li>Your protest will be reviewed by the local appraisal district</li>
                <li>You'll receive a confirmation email within 24-48 hours</li>
                <li>A hearing date will be scheduled, typically within 30-60 days</li>
                <li>We'll send you reminders and preparation tips before your hearing</li>
              </ul>
              <hr />
              <p className="mb-0">
                <strong>Note:</strong> This is a demonstration of the protest filing process. 
                In production, this would submit to actual government systems.
              </p>
            </Alert>
            <Button variant="primary" onClick={() => { setSubmitted(false); setCurrentStep(0); }}>
              File Another Protest
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h1 className="display-4 mb-4">File a Property Tax Protest</h1>
          <p className="lead">
            Follow our step-by-step guide to file your property tax protest.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Body>
              <h4 className="mb-3">Step {currentStep + 1} of {steps.length}: {steps[currentStep]}</h4>
              <ProgressBar now={progress} label={`${Math.round(progress)}%`} className="mb-4" />

              {currentStep === 0 && (
                <div>
                  <Form.Group className="mb-3">
                    <Form.Label>Property Address</Form.Label>
                    <Form.Control
                      type="text"
                      name="propertyAddress"
                      value={formData.propertyAddress}
                      onChange={handleInputChange}
                      placeholder="Enter your property address"
                      required
                    />
                    <Form.Text className="text-muted">
                      Enter the full address of the property you're protesting.
                    </Form.Text>
                  </Form.Group>
                </div>
              )}

              {currentStep === 1 && (
                <div>
                  <Form.Group className="mb-3">
                    <Form.Label>Property Owner Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="ownerName"
                      value={formData.ownerName}
                      onChange={handleInputChange}
                      placeholder="Full name"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="email@example.com"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                      required
                    />
                  </Form.Group>
                </div>
              )}

              {currentStep === 2 && (
                <div>
                  <Form.Group className="mb-3">
                    <Form.Label>Reason for Protest</Form.Label>
                    <Form.Select
                      name="reason"
                      value={formData.reason}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a reason...</option>
                      <option value="overvalued">Property is overvalued</option>
                      <option value="comparable">Lower comparable sales</option>
                      <option value="condition">Property condition issues</option>
                      <option value="error">Assessment error</option>
                      <option value="other">Other</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Supporting Evidence Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="evidenceDescription"
                      value={formData.evidenceDescription}
                      onChange={handleInputChange}
                      placeholder="Describe your evidence (e.g., comparable sales, property issues, etc.)"
                    />
                    <Form.Text className="text-muted">
                      Provide details about why you believe your assessment is incorrect.
                    </Form.Text>
                  </Form.Group>
                </div>
              )}

              {currentStep === 3 && (
                <div>
                  <h5>Review Your Information</h5>
                  <Card className="bg-light mb-3">
                    <Card.Body>
                      <p><strong>Property Address:</strong> {formData.propertyAddress || 'Not provided'}</p>
                      <p><strong>Owner Name:</strong> {formData.ownerName || 'Not provided'}</p>
                      <p><strong>Email:</strong> {formData.email || 'Not provided'}</p>
                      <p><strong>Phone:</strong> {formData.phone || 'Not provided'}</p>
                      <p><strong>Reason:</strong> {formData.reason || 'Not selected'}</p>
                      <p className="mb-0"><strong>Evidence:</strong> {formData.evidenceDescription || 'Not provided'}</p>
                    </Card.Body>
                  </Card>
                  <Alert variant="info">
                    Please review your information carefully before submitting.
                  </Alert>
                </div>
              )}

              <div className="d-flex justify-content-between mt-4">
                <Button
                  variant="secondary"
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                >
                  Previous
                </Button>
                {currentStep === steps.length - 1 ? (
                  <Button variant="success" onClick={handleSubmit}>
                    Submit Protest
                  </Button>
                ) : (
                  <Button variant="primary" onClick={handleNext}>
                    Next
                  </Button>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Card className="bg-light">
            <Card.Body>
              <h5>Tips for a Successful Protest</h5>
              <ul>
                <li>Gather comparable property sales in your area</li>
                <li>Document any property damage or issues</li>
                <li>Review your property details for accuracy</li>
                <li>Submit your protest before the deadline</li>
                <li>Be prepared to present evidence at your hearing</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default FileProtestPage;
