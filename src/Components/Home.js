import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function HomePage() {
    return (
        <Container className="mt-5 d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Card className="p-4">
                <Card.Body className="text-center">
                    <Card.Title>Welcome 😊!</Card.Title>
                    <Card.Text>Choose your topic and let's go 🚀.</Card.Text>
                    <Row className="justify-content-center">
                        <Col xs={12} sm={6} md={4} className="mb-3">
                            <Button variant="primary" className="w-100" href="/topic1">Topic 1</Button>
                        </Col>
                        <Col xs={12} sm={6} md={4} className="mb-3">
                            <Button variant="secondary" className="w-100" href="/topic2">Topic 2</Button>
                        </Col>
                        <Col xs={12} sm={6} md={4} className="mb-3">
                            <Button variant="success" className="w-100" href="/topic3">Topic 3</Button>
                        </Col>
                        <Col xs={12} sm={6} md={4} className="mb-3">
                            <Button variant="warning" className="w-100" href="/topic4">Topic 4</Button>
                        </Col>
                        <Col xs={12} sm={6} md={4} className="mb-3">
                            <Button variant="danger" className="w-100" href="/topic5">Topic 5</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default HomePage;
