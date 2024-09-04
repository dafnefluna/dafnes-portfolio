import Form from "react-bootstrap/Form";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ContactMe() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationName">
                <Form.Label>Name</Form.Label>
                <Form.Control required type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Row>

        <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationEmail">
            <Form.Label>Email address</Form.Label>
            <InputGroup hasValidation>
                <Form.Control type="email" placeholder="name@example.com" aria-describedby="inputGroupPrepend" required />
                <Form.Control.Feedback type="invalid">Please enter a valid email address</Form.Control.Feedback>
            </InputGroup>
            </Form.Group>
            </Row>

        <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationTextArea">
                <Form.Label>How can I assist you?</Form.Label>
                <Form.Control required as="textarea" rows={3} />
            </Form.Group>
            </Row>
        <Button type="submit">Submit form</Button>
        </Form>
    );
}

export default ContactMe;
