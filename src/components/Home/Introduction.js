import styled from 'styled-components';
import { motion } from 'framer-motion';

export default function Introduction() {
    return (
        <Wrapper>
            <motion.div>
                <motion.h5>Le studio Charles Cantin<br/> vous accueille pour toutes vos envies de photos.</motion.h5>
                <motion.p>C’est l’histoire de… en fait,
                          c’est votre histoire que j'immortalise : mariage, grossesse, baptême ; seul, en couple ou bien en famille.
                          Ma principale préoccupation est de répondre le plus précisément et en qualité d’image à la demande de mes clients.
                          Je mets également un point d’honneur à respecter les contraintes de temps !
                </motion.p>
            </motion.div>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    text-align: center;
    @media (min-width: 426px) {
            display: none;
        }
    @media (max-width: 425px) {
            font-size: 1.5rem;
        }

    & h5 {
        font-weight: bold;
        font-size: 1rem;
        text-align: center;
        margin-top: 1.5rem;
        text-shadow: 1px 1px 2px black;
            @media (max-width: 425px) {
            font-size: 1.2rem;
        }
    }
    & p {
        text-align: center;
        margin-top: 1rem;
        font-size: 1.15rem;
        text-shadow: 1px 1px 2px black;
        @media (max-width: 425px) {
            font-size: 1rem;
        }
    }
`;