import React, {useState} from 'react';
import styled from 'styled-components';
import { Carousel, Image, Col, Row, Modal, Button  } from 'react-bootstrap';

//Image Background
import Galerie4 from '../../../../images/galerie/boda.jpeg'

//Components
import ImageGrid from './ImageGrid';
import ImageModal from './ImageModal';

export default function Mariage() {
    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);
    const [smShow, setSmShow] = useState(false);
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <Wrapper>
            <WrapperImage className='wrapper-img'>
                <Image onClick={() => setShow(true)} style={{marginTop: '1rem'}} src={Galerie4} rounded fluid />
            </WrapperImage>
            <h4 className='galerie-title'>Mariage</h4>

            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton style={{backgroundColor: '#7AA5D2'}}>
                    <Modal.Title style={{textAlign: 'center', width: '100%'}}>Mariage</Modal.Title>
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