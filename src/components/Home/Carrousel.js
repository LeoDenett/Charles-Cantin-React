import styled from 'styled-components';
import { Carousel } from 'react-bootstrap'
import { motion } from 'framer-motion';

//Image Background
import BackgroundImage from '../../images/galerie/boda.jpeg'
import BackgroundImage2 from '../../images/galerie/bebe2.jpeg'
import BackgroundImage3 from '../../images/galerie/familia.jpeg'

export default function Carrousel() {
    return (
        <Wrapper>
            <motion.div>
                <Carousel fade>
                    <Carousel.Item>
                        <motion.div>
                            <motion.img
                            src={BackgroundImage}
                            alt="First slide"
                            />
                        </motion.div>
                        <Carousel.Caption>
                        <h3>Mariage</h3>
                        <p>De belles photos remplies d’émotion pour le plus beau jour de votre vie</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <motion.img
                        src={BackgroundImage2}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3>Naissance</h3>
                        <p>Séance photo tout en douceur</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <motion.img
                        src={BackgroundImage3}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>Famille</h3>
                        <p>Immortaliser un moment de vie en famille</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                </motion.div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    & img {
        height: 715px;
        width: 100%;
        @media (max-width: 425px) {
            width: 360px;
            height: 500px;
        }
        @media (max-width: 375px) {
            width: 305px;
        }
    }
    & h3 {
        font-weight: bold;
        font-size: 2rem;
        text-align: center;
        margin-top: 1.5rem;
        text-shadow: 1px 1px 2px black;
            @media (max-width: 425px) {
            font-size: 1.5rem;
        }
    }
    & p {
        text-align: center;
        margin-top: 1rem;
        font-size: 1.15rem;
        text-shadow: 1px 1px 2px black;
        @media (max-width: 425px) {
            font-size: 1.1rem;
        }
    }
`;