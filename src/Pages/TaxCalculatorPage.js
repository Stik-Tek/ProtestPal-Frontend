import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';

function TaxCalculatorPage() {
  const [currentValue, setCurrentValue] = useState('');
  const [proposedValue, setProposedValue] = useState('');
  const [taxRate, setTaxRate] = useState('');
  const [results, setResults] = useState(null);

  const calculateSavings = (e) => {
    e.preventDefault();

    const current = parseFloat(currentValue);
    const proposed = parseFloat(proposedValue);
    const rate = parseFloat(taxRate) / 100;

    const currentTax = current * rate;
    const proposedTax = proposed * rate;
    const annualSavings = currentTax - proposedTax;
    const fiveYearSavings = annualSavings * 5;
    const tenYearSavings = annualSavings * 10;

    setResults({
      currentTax: currentTax.toFixed(2),
      proposedTax: proposedTax.toFixed(2),
      annualSavings: annualSavings.toFixed(2),
      fiveYearSavings: fiveYearSavings.toFixed(2),
      tenYearSavings: tenYearSavings.toFixed(2),
      reduction: (((current - proposed) / current) * 100).toFixed(1),
    });
  };

  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h1 className="display-4 mb-4">Tax Savings Calculator</h1>
          <p className="lead">
            Calculate your potential savings from a successful property tax protest.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <h4>Enter Your Information</h4>
              <Form onSubmit={calculateSavings}>
                <Form.Group className="mb-3">
                  <Form.Label>Current Assessed Value ($)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="350000"
                    value={currentValue}
                    onChange={(e) => setCurrentValue(e.target.value)}
                    required
                  />
                  <Form.Text className="text-muted">
                    Your property's current assessed value from your tax statement.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Proposed/Target Value ($)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="300000"
                    value={proposedValue}
                    onChange={(e) => setProposedValue(e.target.value)}
                    required
                  />
                  <Form.Text className="text-muted">
                    The value you believe your property should be assessed at.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Tax Rate (%)</Form.Label>
                  <Form.Control
                    type="number"
                    step="0.01"
                    placeholder="2.5"
                    value={taxRate}
                    onChange={(e) => setTaxRate(e.target.value)}
                    required
                  />
                  <Form.Text className="text-muted">
                    Your local property tax rate (typically between 1-3%).
                  </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Calculate Savings
                </Button>
              </Form>
            </Card.Body>
          </Card>

          <Card className="mt-3 bg-light">
            <Card.Body>
              <h5>How to Find Your Information</h5>
              <ul className="mb-0">
                <li><strong>Assessed Value:</strong> Found on your property tax statement</li>
                <li><strong>Target Value:</strong> Based on comparable sales or professional appraisal</li>
                <li><strong>Tax Rate:</strong> Listed on your tax statement or local government website</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          {results ? (
            <Card>
              <Card.Body>
                <h4>Your Potential Savings</h4>
                <Alert variant="success">
                  <h5 className="mb-3">Assessment Reduction: {results.reduction}%</h5>
                </Alert>

                <Card className="mb-3 border-primary">
                  <Card.Body>
                    <h6>Current Annual Tax</h6>
                    <h3 className="text-danger">${results.currentTax}</h3>
                  </Card.Body>
                </Card>

                <Card className="mb-3 border-success">
                  <Card.Body>
                    <h6>Proposed Annual Tax</h6>
                    <h3 className="text-success">${results.proposedTax}</h3>
                  </Card.Body>
                </Card>

                <hr />

                <div className="mb-3">
                  <h5>Annual Savings</h5>
                  <h2 className="text-primary">${results.annualSavings}</h2>
                </div>

                <div className="mb-3">
                  <h6>5-Year Savings</h6>
                  <h4 className="text-info">${results.fiveYearSavings}</h4>
                </div>

                <div className="mb-3">
                  <h6>10-Year Savings</h6>
                  <h4 className="text-info">${results.tenYearSavings}</h4>
                </div>

                <Alert variant="info" className="mt-3">
                  <strong>Is it worth protesting?</strong><br />
                  {parseFloat(results.annualSavings) > 500 
                    ? "Yes! Your potential savings justify the effort of filing a protest."
                    : "The savings are modest, but may still be worthwhile depending on the effort required in your area."}
                </Alert>
              </Card.Body>
            </Card>
          ) : (
            <Card className="bg-light">
              <Card.Body>
                <h4>Why Calculate Your Savings?</h4>
                <p>
                  Understanding your potential savings helps you make an informed decision about
                  whether to pursue a property tax protest.
                </p>
                <p>
                  Consider factors like:
                </p>
                <ul>
                  <li>The time required to file and attend a hearing</li>
                  <li>The strength of your evidence</li>
                  <li>The costs of any professional help you might need</li>
                  <li>The long-term savings over multiple years</li>
                </ul>
                <p className="mb-0">
                  <strong>Tip:</strong> Even small annual savings can add up significantly over time!
                </p>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default TaxCalculatorPage;
