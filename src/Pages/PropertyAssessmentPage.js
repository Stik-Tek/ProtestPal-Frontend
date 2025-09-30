import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';

function PropertyAssessmentPage() {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [propertyData, setPropertyData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock property data for MVP
    setPropertyData({
      address: `${address}, ${city}, ${state} ${zipCode}`,
      assessedValue: '$350,000',
      marketValue: '$320,000',
      taxRate: '2.5%',
      annualTax: '$8,750',
      lastAssessment: '2023',
      propertyType: 'Single Family Residence',
      lotSize: '0.25 acres',
      squareFeet: '2,100 sq ft',
    });
  };

  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h1 className="display-4 mb-4">Property Assessment Lookup</h1>
          <p className="lead">
            Enter your property information to view assessment details and tax information.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <h4>Search for Your Property</h4>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Street Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="123 Main St"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>State</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="State"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>ZIP Code</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="ZIP"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Button variant="primary" type="submit" className="w-100">
                  Search Property
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          {propertyData ? (
            <Card>
              <Card.Body>
                <h4>Property Information</h4>
                <Alert variant="info">
                  <strong>Note:</strong> This is demo data for MVP demonstration purposes.
                </Alert>
                <div className="mb-2">
                  <strong>Address:</strong> {propertyData.address}
                </div>
                <div className="mb-2">
                  <strong>Property Type:</strong> {propertyData.propertyType}
                </div>
                <div className="mb-2">
                  <strong>Lot Size:</strong> {propertyData.lotSize}
                </div>
                <div className="mb-2">
                  <strong>Square Feet:</strong> {propertyData.squareFeet}
                </div>
                <hr />
                <h5>Assessment Details</h5>
                <div className="mb-2">
                  <strong>Assessed Value:</strong> {propertyData.assessedValue}
                </div>
                <div className="mb-2">
                  <strong>Market Value:</strong> {propertyData.marketValue}
                </div>
                <div className="mb-2">
                  <strong>Tax Rate:</strong> {propertyData.taxRate}
                </div>
                <div className="mb-2">
                  <strong>Annual Tax:</strong> {propertyData.annualTax}
                </div>
                <div className="mb-2">
                  <strong>Last Assessment:</strong> {propertyData.lastAssessment}
                </div>
                <Alert variant="warning" className="mt-3">
                  Your property appears to be assessed higher than its market value. 
                  Consider filing a protest to potentially reduce your tax bill.
                </Alert>
              </Card.Body>
            </Card>
          ) : (
            <Card className="bg-light">
              <Card.Body>
                <h4>How It Works</h4>
                <ol>
                  <li>Enter your property address in the form</li>
                  <li>We'll retrieve your property's assessment information</li>
                  <li>Review your tax details and identify potential savings</li>
                  <li>Use our tools to file a protest if needed</li>
                </ol>
                <p className="mb-0">
                  <strong>Note:</strong> This MVP version uses sample data for demonstration purposes.
                  In production, this would connect to actual property assessment databases.
                </p>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default PropertyAssessmentPage;
