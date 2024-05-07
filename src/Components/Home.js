import React from 'react';
import { Container, Button } from 'react-bootstrap';

function HomePage() {
    return (
        <Container className="mt-5">
            <h1 className="text-center mb-4">Welcome 😊! choose your topic and let's go 🚀.</h1>
            <div className="d-flex justify-content-center">
                <Button variant="primary" className="mx-2" href="/topic1">Topic 1</Button>
                <Button variant="secondary" className="mx-2" href="/topic2">Topic 2</Button>
                <Button variant="success" className="mx-2" href="/topic3">Topic 3</Button>
                <Button variant="warning" className="mx-2" href="/topic4">Topic 4</Button>
                <Button variant="danger" className="mx-2" href="/topic5">Topic 5</Button>
            </div>
        </Container>
    );
}

export default HomePage;
