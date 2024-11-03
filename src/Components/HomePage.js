import React from 'react';
import { AuthContext } from '../contexts/AuthContext.js' ;


import { Form, Button, Container } from 'react-bootstrap';

const HomePage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const { authToken, logout } = useContext(AuthContext);

    return (
        <Container className="d-flex flex-column align-items-center mt-5">
            <h1 className="mb-4">Welcome to Athletes Diary</h1>
            <Form style={{ width: '300px' }}>
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default HomePage;
