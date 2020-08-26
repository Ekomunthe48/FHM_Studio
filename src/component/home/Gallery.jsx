import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios'
import { Container, CardImg, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import './css/gallery.css'
import FsLightbox from 'fslightbox-react';

const api = 'http://localhost:3010'

const Gallery = (props) => {

    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });
    const [images, setImages] = useState([])

    useEffect(() => {
        axios.get(api + '/tampil').then(res => {
            console.log('values ', JSON.stringify(res.data))
            setImages(res.data)
        })
    }, [])

    function openLightboxOnSlide(e) {
        const {id} = e.target
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: id
        });
    }

    const showImages = (images) => {
        let res = []
        let imagesUrl = []
        let index = 1
        for (let image of images) {
            console.log('image', image.picture)
            console.log(image.picture)
            let card = <CardImg className="gambar" id={index} src={image.picture} onClick={(e) => openLightboxOnSlide(e)} alt={images.title} />
            res.push(card)
            imagesUrl.push(image.picture)
            index++
        }
        console.log('images url', imagesUrl)
        let lb = <FsLightbox
            toggler={lightboxController.toggler}
            sources={imagesUrl}
            slide={lightboxController.slide}
        />
        console.log('images url', imagesUrl)
        res.push(lb)
        return res
    }

    return (
        <Fragment >
            <div className='studio' style={{ "backgroundColor": "rgb(255, 255, 255)", }}>
                <h1 style={{
                    "textAlign": "center",
                    "marginTop": "2px"
                }}>Gallery</h1>
                <Container className="kotak" style={{ "backgroundColor": "rgb(255, 255, 255)" }}>
                    {showImages(images)}
                </Container>
            </div>
        </Fragment>
    )
}

export default Gallery;