import React from "react";
import styled from 'styled-components';
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <Wrapper>
            <motion.h2 animate={{ fontSize: '2rem', textAlign: 'center' }}>Contact</motion.h2>
            <ContactForm/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    && h2 {
        @media (max-width: 425px) {
            position: relative;
            left: 1rem;
            }
        @media (max-width: 375px) {
            position: relative;
            left: 9.5rem;
            width: 15px;
            }
        @media (max-width: 320px) {
            position: relative;
            left: 7rem;
            top: 3rem;
            width: 15px;
            }
    }
`;