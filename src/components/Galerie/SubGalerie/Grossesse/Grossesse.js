import React, {useState} from 'react';
import styled from 'styled-components';
import { Carousel, Image, Col, Row, Modal, Button  } from 'react-bootstrap';


//Image Background
import Galerie6 from '../../../../images/galerie/embarazada2.jpeg'

//Components
import ImageGrid from './ImageGrid';
import ImageModal from './ImageModal';

export default function Grossesse() {
    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);
    const [smShow, setSmShow] = useState(false);
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <Wrapper>
            <WrapperImage className='wrapper-img'>
                <Image onClick={() => setShow(true)} style={{marginTop: '1rem'}} src={Galerie6} rounded fluid/>
            </WrapperImage>
            <h4 className='galerie-title'>Grossesse</h4>

            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton style={{backgroundColor: '#7AA5D2'}}>
                    <Modal.Title style={{textAlign: 'center', width: '100%'}}>Grossesse</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ImageGrid setSelectedImg={setSelectedImg} />
                        { selectedImg && (
                            <ImageModal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
                        )}
                </Modal.Body>
            </Modal>
        </Wrapper>
    )
}

const Wrapper = styled.div`
`;

const WrapperImage = styled.div`
`;