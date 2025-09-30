import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';

function ResourcesPage() {
  const documents = [
    {
      title: 'Sample Protest Letter Template',
      description: 'A professional template for writing your property tax protest letter.',
      category: 'Templates',
    },
    {
      title: 'Evidence Checklist',
      description: 'Complete checklist of evidence to gather for your protest.',
      category: 'Guides',
    },
    {
      title: 'Comparable Sales Guide',
      description: 'How to find and use comparable property sales in your protest.',
      category: 'Guides',
    },
    {
      title: 'Hearing Preparation Tips',
      description: 'What to expect and how to prepare for your protest hearing.',
      category: 'Guides',
    },
    {
      title: 'Property Valuation Basics',
      description: 'Understanding how property values are assessed.',
      category: 'Education',
    },
  ];

  const articles = [
    {
      title: 'Understanding Property Tax Appeals',
      excerpt: 'Learn the fundamentals of property tax assessment and the appeals process.',
      date: '2024-01-15',
    },
    {
      title: 'Common Mistakes in Tax Protests',
      excerpt: 'Avoid these pitfalls when filing your property tax protest.',
      date: '2024-01-10',
    },
    {
      title: 'When to Hire a Professional',
      excerpt: 'Deciding whether to handle your protest yourself or hire an expert.',
      date: '2024-01-05',
    },
  ];

  const faqs = [
    {
      question: 'What is the deadline for filing a protest?',
      answer: 'Deadlines vary by location but are typically 30-60 days after you receive your assessment notice. Check your local appraisal district for specific dates.',
    },
    {
      question: 'Do I need a lawyer to file a protest?',
      answer: 'No, most property owners successfully file protests without legal representation. ProtestPal provides all the guidance you need.',
    },
    {
      question: 'What evidence should I gather?',
      answer: 'Collect comparable property sales, photos of property issues, recent appraisals, and any documentation showing errors in your assessment.',
    },
    {
      question: 'How long does the process take?',
      answer: 'From filing to resolution, the process typically takes 2-4 months, though this varies by jurisdiction.',
    },
  ];

  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h1 className="display-4 mb-4">Resource Library</h1>
          <p className="lead">
            Everything you need to successfully protest your property taxes.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={8}>
          <h3 className="mb-3">Documents & Templates</h3>
          <Row>
            {documents.map((doc, index) => (
              <Col md={6} key={index} className="mb-3">
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>{doc.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{doc.category}</Card.Subtitle>
                    <Card.Text>{doc.description}</Card.Text>
                    <Button variant="primary" size="sm">Download</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <h3 className="mb-3 mt-4">Educational Articles</h3>
          {articles.map((article, index) => (
            <Card key={index} className="mb-3">
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Published: {article.date}
                </Card.Subtitle>
                <Card.Text>{article.excerpt}</Card.Text>
                <Button variant="outline-primary" size="sm">Read More</Button>
              </Card.Body>
            </Card>
          ))}
        </Col>

        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <h5>Quick Links</h5>
              <ListGroup variant="flush">
                <ListGroup.Item action href="/property-assessment">
                  Property Lookup
                </ListGroup.Item>
                <ListGroup.Item action href="/file-protest">
                  File a Protest
                </ListGroup.Item>
                <ListGroup.Item action href="/tax-calculator">
                  Tax Calculator
                </ListGroup.Item>
                <ListGroup.Item action href="/contact">
                  Get Help
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h5>Frequently Asked Questions</h5>
              {faqs.map((faq, index) => (
                <div key={index} className="mb-3">
                  <h6>{faq.question}</h6>
                  <p className="small">{faq.answer}</p>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ResourcesPage;
