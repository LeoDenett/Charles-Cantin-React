import React from "react";
import styled from 'styled-components';
import { motion } from "framer-motion";

//Components
import CardTarifs from "./CardTarifs";
import PhImage from "./PhImage";

export default function Tarifs() {
    return (
        <Wrapper>
        <motion.div className='tarifContainer' style={{ margin: '2rem', padding: '2rem', backgroundColor: '#303841'}}>
            <motion.h2 className='tarif' animate={{ fontSize: '2rem', textAlign: 'center' }}>Tarifs et Prestations</motion.h2>
            <CardTarifs/>
            <PhImage/>
        </motion.div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
`;