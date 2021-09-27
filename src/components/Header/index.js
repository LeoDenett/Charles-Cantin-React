import * as React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { Container, Row, Col, Dropdown} from 'react-bootstrap';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { motion } from 'framer-motion';

//Components
import LogoComponent from '../UI/Logo';

export default function Header() {
    const location =useLocation();
    console.log(location);
    return (
        <Wrapper>
        <Container fluid style={{ borderBottom: 'solid 2px', height: '7rem', maxHeight: '7rem',justifyContent: 'center', alignItems: 'center', display: 'flex',}}>
            <Row style={{justifyContent: 'center', alignItems: 'center', width: '100%'}}>

                <Col>
                    <LogoStyle>
                        <Container className='Logo' style={{justifyContent: 'center', alignItems: 'center', display: 'flex', position:'relative', top: '4.5rem', zIndex: '10'}}>
                            <LogoComponent/>
                        </Container>
                    </LogoStyle>
                </Col>

                <Col style={{textAlign: 'center'}}><h1 animate={{ fontSize: '2rem' }}>Charles Cantin - Photographe</h1></Col>

                <Col style={{textAlign: 'center'}}>
                    <Link className='link' style={{marginRight: '1.5rem'}} to="/"><MenuNav style={{}} isCurrentPage={location.pathname === "/"}>Home</MenuNav></Link>
                    <Link className='link' isAc style={{marginRight: '1.5rem'}} to="/Galerie"><MenuNav isCurrentPage={location.pathname === "/Galerie"}>Galerie</MenuNav></Link>
                    <Link className='link' style={{marginRight: '1.5rem'}} to="/Tarifs"><MenuNav isCurrentPage={location.pathname === "/Tarifs"}>Tarifs et Prestations</MenuNav></Link>
                    <Link className='link' style={{marginRight: '1.5rem'}} to="/Contact"><MenuNav isCurrentPage={location.pathname === "/Contact"}>Contact</MenuNav></Link>
                    <Link className='link' style={{marginRight: '1.5rem'}}><MenuNav><FaInstagram/></MenuNav></Link>
                    <Link className='link'><MenuNav><FaFacebookF/></MenuNav></Link>

                    <MenuDropdown>
                        <Dropdown className='menuDropdown'>
                            <Dropdown.Toggle style={{backgroundColor: 'inherit', borderColor: '#EEEEEE'}} id="dropdown-basic">
                                <span>Menu</span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{backgroundColor: '#7AA5D2', borderColor: '#EEEEEE', textAlign: 'center'}}>
                                <Dropdown.Item style={{color : '#EEEEEE', padding: '0.5rem'}}><Link className='link' to="/" style={{color: 'inherit'}}>Home</Link></Dropdown.Item>
                                <Dropdown.Item style={{color : '#EEEEEE', padding: '0.5rem'}}><Link className='link' to="/Galerie" style={{color: 'inherit'}}>Galerie</Link></Dropdown.Item>
                                <Dropdown.Item style={{color : '#EEEEEE', padding: '0.5rem'}}><Link className='link' to="/Tarifs" style={{color: 'inherit'}}>Tarifs</Link></Dropdown.Item>
                                <Dropdown.Item style={{color : '#EEEEEE', padding: '0.5rem'}}><Link className='link' to="/Contact" style={{color: 'inherit'}}>Contact</Link></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </MenuDropdown>
                </Col>
            </Row>
        </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    & h1{
        @media (max-width: 505px) {
            font-size: 1.5rem;
            position: relative;
            top: 0rem;
            right: 0rem;
        }
        @media (max-width: 497px) {
            font-size: 1.5rem;
            position: relative;
            top: 2.3rem;
            right: 5rem;
        }
        @media (max-width: 375px) {
                font-size: 1.3rem;
                position: relative;
                top: 2.3rem;
                right: 4rem;
        }
        @media (max-width: 320px) {
                font-size: 1.3rem;
                position: relative;
                top: 1.5rem;
                right: 4rem;
        }
}
`;

const MenuNav = styled.a`
    color: inherit;
    font-size: 1.18rem;
    border-bottom: solid 0.13rem ${props=>props.isCurrentPage ? "" : "transparent"};
    transition: linear 0.3s;
    @media (max-width: 784px) {
            display: none;
            }
    &:hover{
        color: #47555E;
        border-bottom: solid 0.13rem;
    }
`;

const MenuDropdown = styled.div`
    && span {
        @media (max-width: 425px) {
            display: none;
            position: relative;
            top: 5rem;
        }
    }
    @media (min-width: 784px) {
        display: none;
    }
    @media (max-width: 784px) {
            display: flex;
            max-width: 20%;
            justify-content: center;
            position: relative;
            left: 10rem;
            bottom: 0.5rem;
            margin-right: 2rem;
    }
    @media (max-width: 630px) {
            position: relative;
            left: 3rem;
            bottom: 0rem;
    }
    @media (max-width: 495px) {
            position: relative;
            left: 20rem;
            bottom: 1rem;
    }
    @media (max-width: 400px) {
            position: relative;
            left: 19rem;
            bottom: 1rem;
    }
    @media (max-width: 375px) {
            position: relative;
            left: 17rem;
            bottom: 1rem;
    }
    @media (max-width: 320px) {
            position: relative;
            left: 15rem;
            bottom: 2rem;
            margin-right: 0rem;
    }
`;

const LogoStyle = styled.div`
    @media (max-width: 784px) {
            height: 3rem;
            width: 150px;
    }
    @media (max-width: 425px) {
            height: 2rem;
    }
    @media (max-width: 375px) {
            height: 2rem;
            width: 120px;
    }
    @media (max-width: 320px) {
            height: 0.7rem;
            width: 100px;
    }
`;