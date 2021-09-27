import React, {useState} from 'react';
import styled from 'styled-components';
import { Image, Modal } from 'react-bootstrap';

//Image Background
import Galerie1 from '../../../../images/galerie/bebe10.jpg'

//Components
import ImageGrid from './ImageGrid';
import ImageModal from './ImageModal';

export default function Naissance() {
    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <Wrapper>
            <WrapperImage className='wrapper-img'>
                <Image onClick={() => setShow(true)} style={{marginTop: '1rem',}} src={Galerie1} rounded fluid/>
            </WrapperImage>
            <h4 className='galerie-title'>Naissance</h4>

            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton style={{backgroundColor: '#7AA5D2'}}>
                    <Modal.Title style={{textAlign: 'center', width: '100%'}}>Naissance</Modal.Title>
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