// HomePage.js

import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import UserTestimonialCard from './CardTemplates/UserTestimonialCard';
import ServiceCard from './CardTemplates/ServiceCard';

function HomePage({ onSignUpClick }) {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Property Assessment',
      description: 'Look up your property details and tax information quickly and easily.',
      buttonText: 'Get Started',
      path: '/property-assessment',
    },
    {
      title: 'File a Protest',
      description: 'Step-by-step guidance to file your property tax protest with confidence.',
      buttonText: 'File Now',
      path: '/file-protest',
    },
    {
      title: 'Tax Calculator',
      description: 'Calculate your potential savings from a successful property tax protest.',
      buttonText: 'Calculate',
      path: '/tax-calculator',
    },
  ];

  const userTestimonials = [
    {
      userAvatar: 'https://via.placeholder.com/64',
      userName: 'John Doe',
      userPosition: 'Property Owner',
      userTestimonial:
        'ProtestPal helped me save $2,400 on my property taxes. The process was straightforward and the tools were incredibly helpful!',
    },
    {
      userAvatar: 'https://via.placeholder.com/64',
      userName: 'Jane Smith',
      userPosition: 'Real Estate Agent',
      userTestimonial:
        'I recommend ProtestPal to all my clients. It makes property tax protests simple and accessible for everyone.',
    },
    {
      userAvatar: 'https://via.placeholder.com/64',
      userName: 'Mike Johnson',
      userPosition: 'Small Business Owner',
      userTestimonial:
        'As a business owner, saving on property taxes matters. ProtestPal gave me the tools to challenge my assessment successfully.',
    },
  ];
  return (
    <div>
      {/* Header */}
      <header className="bg-dark text-white py-5">
        <Container>
          <Row>
            <Col lg={8}>
              <h1 className="display-4">Welcome to ProtestPal</h1>
              <p className="lead">
                Your trusted partner in property tax protests.
              </p>
              <Button variant="primary" size="lg" onClick={() => navigate('/property-assessment')}>
                Get Started
              </Button>
            </Col>
          </Row>
        </Container>
      </header>

      {/* Hero Section */}
      <section className="bg-light py-5">
        <Container>
          <Row>
            <Col lg={6}>
              <h2 className="display-5">Empower Yourself with ProtestPal</h2>
              <p>
                Take control of your property taxes. File protests, connect with
                others, and stay informed about tax-related news.
              </p>
              <Button variant="info" onClick={() => navigate('/about')}>Learn More</Button>
            </Col>
            <Col lg={6}>
              <Card>
                <Card.Body>
                  <h5>Sign Up for Free</h5>
                  <p>
                    Join ProtestPal and start saving on your property taxes
                    today.
                  </p>
                  <Button variant="primary" onClick={onSignUpClick}>Sign Up</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Section */}
      <section className="py-5">
        <Container>
          <Row>
            <Col>
              <h2 className="display-5">Featured Services</h2>
            </Col>
          </Row>
          <Row>
            {services.map((service, index) => (
              <Col key={index} md={4}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  buttonText={service.buttonText}
                  onClick={() => navigate(service.path)}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="bg-light py-5">
        <Container>
          <Row>
            <Col>
              <h2 className="display-5">What Our Users Say</h2>
            </Col>
          </Row>
          <Row>
            {userTestimonials.map((testimonial, index) => (
              <Col key={index} md={6} lg={4}>
                <UserTestimonialCard
                  userAvatar={testimonial.userAvatar}
                  userName={testimonial.userName}
                  userPosition={testimonial.userPosition}
                  userTestimonial={testimonial.userTestimonial}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default HomePage;
