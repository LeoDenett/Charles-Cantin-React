import React from "react";
import styled from 'styled-components';
import { Accordion } from "react-bootstrap";
import { FaEuroSign } from "react-icons/fa";

export default function CardTarifs() {
    return (
        <Wrapper>
            <Accordion defaultActiveKey="0" style={{backgroundColor: '#7AA5D2'}}>
                <Accordion.Item eventKey="0" style={{marginBottom: '1.5rem', backgroundColor: '#EEEEEE'}}>
                    <Accordion.Header><h2 className='titleTarif' style={{margin: 0,}}>~Juste moi~</h2><span style={{color: 'transparent'}}>---</span><FaEuroSign/><strong className='titleTarif'>130</strong> </Accordion.Header>
                    <Accordion.Body style={{backgroundColor: '#EEEEEE'}}>
                    <strong style={{color: '#7AA5D2'}}>Séance pour une personne, en extérieur ou en studio</strong>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" style={{marginBottom: '1.5rem'}}>
                    <Accordion.Header><h2 className='titleTarif' style={{margin: 0}}>~Pour deux~</h2><span style={{color: 'transparent'}}>---</span><FaEuroSign/><strong className='titleTarif'>195</strong></Accordion.Header>
                    <Accordion.Body>
                    <strong style={{color: '#7AA5D2'}}>Pour deux personnes, en extérieur ou en studio</strong>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" style={{marginBottom: '1.5rem'}}>
                    <Accordion.Header><h2 className='titleTarif' style={{margin: 0}}>~Famille~</h2><span style={{color: 'transparent'}}>---</span><FaEuroSign/><strong className='titleTarif'>220</strong></Accordion.Header>
                    <Accordion.Body>
                    <strong style={{color: '#7AA5D2'}}>Pour la famille ou les amis jusqu’à 4 personnes, en extérieur ou en studio
                    30 euros en supplément par personne au-delà de 4 (hormis enfant jusqu’à 2 ans)</strong>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" style={{marginBottom: '1.5rem'}}>
                    <Accordion.Header><h2 className='titleTarif' style={{margin: 0}}>~«Il était une fois ~</h2><span style={{color: 'transparent'}}>---</span><FaEuroSign/><strong className='titleTarif'>160</strong></Accordion.Header>
                    <Accordion.Body>
                    <strong style={{color: '#7AA5D2'}}>Photo de grossesse (À votre domicile, en extérieur ou en studio)</strong>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5" style={{marginBottom: '1.5rem'}}>
                    <Accordion.Header><h2 className='titleTarif' style={{margin: 0}}>~Mon bébé~</h2><span style={{color: 'transparent'}}>---</span><FaEuroSign/><strong className='titleTarif'>100</strong></Accordion.Header>
                    <Accordion.Body>
                    <strong style={{color: '#7AA5D2'}}>Photo d’enfant jusqu’à 3 ans (photo à domicile)</strong>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header><h2 className='titleTarif' style={{margin: 0}}>~J’immortalise l’événement~</h2><span style={{color: 'transparent'}}>----</span><strong className='titleTarif'>Sur mesure</strong></Accordion.Header>
                    <Accordion.Body>
                    <strong style={{color: '#7AA5D2'}}>Prestation de mariage ou baptême sur devis</strong>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: #7AA5D2;
    border: solid 0.15rem #EEEEEE;
    max-width: 500px;
    padding: 2rem;
    border-radius: 2rem;
    padding: 2rem;
    text-align: center;
    position: relative;
    top: 3rem;
    left: 8rem;
    @media (max-width: 1440px) {
            left: 2.5rem;
        }
    @media (max-width: 1024px) {
            width: 400px;
            left: 1rem;
        }
    @media (max-width: 900px) {
            width: 400px;
            left: 12rem;
        }
    @media (max-width: 768px) {
            width: 400px;
            left: 7rem;
        }
    @media (max-width: 625px) {
            width: 300px;
            left: 6rem;
        }
    @media (max-width: 425px) {
            width: 300px;
            left: 0rem;
        }
    @media (max-width: 375px) {
            width: 250px;
            left: 0rem;
        }
    @media (max-width: 320px) {
            width: 200px;
            padding: 0.5rem;
            left: -0.3rem;
        }
`;