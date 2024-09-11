import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Add custom CSS to style your Dashboard

const Dashboard = () => {
  return (
    <Container className="dashboard-container">
      <Row>
        <Col className="text-center mt-5">
          <h1>Welcome to Gagan's Dashboard</h1>
          <p>This is your personal space where you can manage your profile, view statistics, and more.</p>
          <Button as={Link} to="/profile" variant="primary" className="m-3">
            Go to Profile
          </Button>
          <Button as={Link} to="/settings" variant="secondary" className="m-3">
            Settings
          </Button>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={4} className="text-center">
          <h3>Recent Activity</h3>
          <p>View your most recent activities here.</p>
        </Col>
        <Col md={4} className="text-center">
          <h3>Statistics</h3>
          <p>Analyze your progress with detailed statistics.</p>
        </Col>
        <Col md={4} className="text-center">
          <h3>Notifications</h3>
          <p>Check out your latest notifications and alerts.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
