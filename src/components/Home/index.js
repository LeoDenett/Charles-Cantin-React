import styled from 'styled-components';
import { motion } from 'framer-motion';
import Carrousel from './Carrousel';
import Introduction from './Introduction';

export default function Home() {
    return (
        <Wrapper>
            <motion.div>
                <Carrousel/>
                <Introduction/>
            </motion.div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    display: block;
    height: 740px;
    margin: 2rem;
    @media (max-width: 425px) {
            height: 740px;
    }
    @media (max-width: 375px) {
            height: 780px;
    }
    @media (max-width: 320px) {
            height: 820px;
    }
`;



