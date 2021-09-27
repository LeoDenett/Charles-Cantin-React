import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Form, Button } from 'react-bootstrap';
import { FaInstagram } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";

    function ContactForm() {
    const [state, handleSubmit] = useForm("https://formspree.io/f/mayavqyk");
    if (state.succeeded) {
        return <h2>Merci pour votre message!</h2>;
    }
    return (
        <Wrapper>
        <motion.div>
            <motion.div className='contactInfo'>
                <h5 style={{display: 'block'}}>Téléphone: 0633212154</h5>
                <h5 style={{display: 'block'}}>Email: CharlesCantin@test.com</h5>
                <h5 style={{display: 'inline', marginRight: '1rem'}}>Suivez-nous sur:</h5>
                <SiFacebook size={'1.5rem'} style={{marginRight: '1rem', cursor: 'pointer'}} /><FaInstagram size={'1.5rem'} style={{cursor: 'pointer'}} />
            </motion.div>

            <motion.div className='contactEmail'>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" id="email" name="email" placeholder="name@example.com" />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Votre message</Form.Label>
                        <Form.Control as="textarea" id="message" name="message" placeholder="Votre message ici" rows={5} />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </Form.Group>
                    <Button onSubmit={handleSubmit} variant="outline-light" type="submit" disabled={state.submitting} className='contact-button'>
                        Submit
                    </Button>
                </Form>
            </motion.div>
        </motion.div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    @media (max-width: 1440px) {

            }
    @media (max-width: 375px) {
            }
`;

export default ContactForm;