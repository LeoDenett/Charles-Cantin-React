import React from "react";
import styled from 'styled-components';
import { motion } from "framer-motion";
import { Image } from "react-bootstrap";

export default function PhImage() {
    return (
        <Wrapper>
            <Image
                fluid
                style={{borderRadius: '1.8rem'}}
                src={'https://firebasestorage.googleapis.com/v0/b/charlescantin-74a56.appspot.com/o/brandon-erlinger-ford-jL8QFwnuOcQ-unsplash.jpg?alt=media&token=4fda1a32-605d-4ea0-8ee5-933f6d1b944d'} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 603px;
    width: 410px;
    position: relative;
    margin: 0;
    left: 75.5rem;
    bottom: 34.5rem;
    border: solid 0.2rem #EEEEEE;
    border-radius: 2rem;
    @media (max-width: 1440px) {
            height: 560px;
            width: 500px;
            left: 48rem;
            bottom: 32rem;
        }
    @media (max-width: 1024px) {
            width: 350px;
            height: 580px;
            left: 33.5rem;
            bottom: 33rem;
        }
    @media (max-width: 1023px) {
            display: none;
        }
        && img {
            @media (max-width: 1440px) {
            height: 554px;
            width: 900px;
            }
            @media (max-width: 1024px) {
            height: 574px;
            }
        }
`;
