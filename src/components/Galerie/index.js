import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';

//Import Components
import Naissance from './SubGalerie/Naissance/Naissance';
import Famille from './SubGalerie/Famille/Famille';
import Mariage from './SubGalerie/Mariage/Mariage';
import Couple from './SubGalerie/Couple/Couple';
import Baptême from './SubGalerie/Baptême/Baptême';
import Grossesse from './SubGalerie/Grossesse/Grossesse';

export default function Galerie() {
    return (
        <Wrapper>
            <WrapperGalerie>
                <Row>
                    <Col><motion.h1 animate={{fontSize: '2rem'}}>Galerie</motion.h1></Col>
                </Row>
                <Row className='row-galerie'>
                    <Col xs={12} md={6} lg={4}>
                        <Naissance/>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Famille />
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Mariage />
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Couple/>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Baptême/>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Grossesse/>
                    </Col>
                </Row>
            </WrapperGalerie>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 780px;
    margin: 2rem;
    padding: 2rem;
    background-color: #303841;
    @media (max-width: 1024px) {
        height: 630px;
    }
    @media (max-width: 988px) {
        height: 1030px;
    }
    @media (max-width: 868px) {
        height: 860px;
    }
    @media (max-width: 768px) {
        height: 800px;
    }
    @media (max-width: 767px) {
        margin: 2rem;
        position: relative;
        left: 0rem;
        height: 2360px;
    }
    @media (max-width: 625px) {
        margin: 2rem;
        position: relative;
        left: 0rem;
        height: 2060px;
    }
    @media (max-width: 525px) {
        margin: 2rem;
        position: relative;
        left: 0rem;
        height: 1740px;
        width: 460px;
    }
    @media (max-width: 425px) {
        margin: 2rem;
        position: relative;
        left: 0rem;
        height: 1600px;
        width: 360px;
    }
    @media (max-width: 400px) {
        margin: 1rem;
        margin-right: -2rem;
        position: relative;
        left: 0.2rem;
        height: 1600px;
        width: 360px;
    }
    @media (max-width: 375px) {
        margin: 1rem;
        position: relative;
        left: 0.25rem;
        height: 1530px;
        width: 335px;
    }
    @media (max-width: 346px) {
        margin: 0rem;
        margin-bottom: 1.60rem;
        position: relative;
        left: 0.4rem;
        top: 0.4rem;
        height: 1550px;
        max-width: 340px;
    }
    @media (max-width: 320px) {
        margin: 0rem;
        margin-bottom: 1.60rem;
        position: relative;
        left: 0.4rem;
        top: 0.4rem;
        height: 1550px;
        max-width: 306px;
    }
    & h1 {
        text-align: center;
        margin-top: 1rem;
        font-size: 2rem;
        @media (min-width: 430px) and (max-width: 1024px) {
            margin-bottom: 4rem;
    }
    }
`;

const WrapperGalerie = styled.div`
    justify-content: space-around;
    align-items: center;
    background-color: #303841;
    height: 677px;
    @media (max-width: 1024px) {
        height: 450px;
    }
    @media (max-width: 320px) {
        margin: 0rem;
    }
    & h4 {
        width: 10px;
        text-align: center;
        position: relative;
        bottom: 50px;
        left: 175px;
        @media (max-width: 320px) {
        max-width: 15px;
        height: 15px;
        margin: 0;
        }
    }
    & img {
        transition: linear 0.3s;
        opacity: 1;
        cursor: pointer;
        @media (max-width: 320px) {
            width: 270px;
            height: 220px;
            margin: 0rem;
            }
    }
    & img:hover {
        opacity: 0.3;
    }
`;