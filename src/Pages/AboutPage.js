import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function AboutPage() {
  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h1 className="display-4 mb-4">About ProtestPal</h1>
          <p className="lead">
            Empowering property owners to take control of their property tax bills.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={12}>
          <Card className="mb-3">
            <Card.Body>
              <h3>Our Mission</h3>
              <p>
                ProtestPal is dedicated to helping property owners navigate the complex world of property
                taxes. We believe that everyone should have access to the tools and information needed to
                ensure their property is fairly assessed and taxed.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={6}>
          <Card className="h-100">
            <Card.Body>
              <h4>🤓 Property Assessment</h4>
              <p>
                Quickly access your property's assessment and tax information to understand your tax
                bill better.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100">
            <Card.Body>
              <h4>📂 File Protests</h4>
              <p>
                Get step-by-step guidance on how to file a property tax protest, making the process
                straightforward and accessible.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={6}>
          <Card className="h-100">
            <Card.Body>
              <h4>☎️ Community Support</h4>
              <p>
                Connect with a community of property owners who share your concerns about high property
                taxes.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100">
            <Card.Body>
              <h4>🧮 Tax Calculator</h4>
              <p>
                Estimate the potential savings from a successful property tax protest, helping you
                decide if it's worth pursuing.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Card className="bg-light">
            <Card.Body>
              <h3>Why Property Tax Protests Matter</h3>
              <p>
                Property taxes are one of the largest expenses for homeowners and businesses. Yet many
                properties are over-assessed, leading to unnecessarily high tax bills. By protesting your
                property assessment, you can potentially save hundreds or even thousands of dollars per year.
              </p>
              <p>
                The process can seem daunting, but with ProtestPal's guidance and tools, you can navigate
                it with confidence. Our platform provides everything you need to understand your assessment,
                gather evidence, and file a successful protest.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutPage;
