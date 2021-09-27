import * as React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

//Components
import LogoComponent from '../UI/Logo';

export default function Header() {
    const location =useLocation();
    console.log(location);
    return (
        <Wrapper>
        <Container fluid style={{ borderTop: 'solid 2px', height: '7rem', maxHeight: '7rem',justifyContent: 'center', alignItems: 'center', display: 'flex',}}>
            <Row style={{justifyContent: 'center', alignItems: 'center', width: '100%'}}>

                <Col style={{textAlign: 'center'}}><h1>Charles Cantin - Photographe</h1></Col>

                <Col style={{textAlign: 'center'}}><h5 style={{fontSize: '1rem'}}><FaRegCopyright/>2021 Copyright: Charles Cantin</h5></Col>

                <Col style={{textAlign: 'center'}}>
                    <h5 style={{fontSize: '1rem'}}>Contact</h5>
                    <Link style={{marginRight: '1.5rem'}}><MenuNav><FaInstagram/></MenuNav></Link>
                    <Link><MenuNav><FaFacebookF/></MenuNav></Link>
                </Col>
            </Row>
        </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    & h1 {
        font-size: 1rem;
    }
    & h5 {
        font-size: 0.5rem;
    }
`;

const MenuNav = styled.a`
    color: inherit;
    font-size: 1.18rem;
    border-bottom: solid 0.13rem ${props=>props.isCurrentPage ? "" : "transparent"};
    transition: linear 0.3s;
    & a:active {
    color: red;
    }
    &:hover{
        color: #47555E;
        border-bottom: solid 0.13rem;
    }
`;

