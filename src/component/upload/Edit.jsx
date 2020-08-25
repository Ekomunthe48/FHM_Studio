import React, { useState } from 'react';
import Axios from 'axios';
import { Container, Col, Row, FormGroup, Label, Input, Button, Form, CardImg } from 'reactstrap'
import './css/form.css'

const api = 'http://localhost:3010'

const Edit = () => {
    let search = window.location.search
    let params = new URLSearchParams(search)
    let id = params.get('id')
    console.log('id', id)

    const [title, setTitle] = useState(null)
    const [date, setDate] = useState(null)
    const [file, setFile] = useState(null)  
    const [images, setImages] = useState([])

    const handleFileChange = (e) => {
        if (e.target.files) {
            console.log(e.target.files[0])
            setFile({    
                raw: e.target.files[0],
                loaded: 0
             })
             console.log('images' , file)   
        }        
    }

    const uploadPic = async () => {
        var formData = new FormData()
        formData.set('id', id)
        formData.set('title', title)
        formData.set('date', date)
        formData.append('picture', file.raw)
        try {
            await Axios.put(api + '/ubah', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(json => {
                if (json.data.status === 200) {
                    setImages({
                        response: json.data,
                        display: 'block'
                    })
                } else {
                    setImages({
                        response: json.data,
                        display: 'block'
                    })
                }
            })
        } catch(err) {

        }
    }
    return (
        <Container>
            <h4>From Ubah Data</h4>
            {/* <Alert color="success" style={{ display:'none' }}>
               {setImages({response: 'Upload Data Success'})}
            </Alert> */}
            <Form className="form">
                <Col>
                    <Label>Judul</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="judul" value={images.title} onChange={(e) => setTitle(e.target.value)} placeholder="Masukan Judul" />
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Tanggal</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="date" name="Tanggal" value={images.date} onChange={(e) => setDate(e.target.value)} placeholder="Masukan Tanggal" />                                </Col>
                        </Row>
                    </FormGroup>
                    <Label>gambar</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="file" name="gambar" value={images.picture} onChange={handleFileChange} placeholder="Masukkan Gambar" />        
                                <Container className="img-prw">
                                <Label> Image Preview </Label>
                                <CardImg  src={file? URL.createObjectURL(file.raw) : null} alt={file? file.name : null}/>
                                </Container>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Button type="button" onClick={() => uploadPic('', title, date, file)}>Update</Button>
                            </Col>
                        </Row>
                    </FormGroup>
                </Col>
            </Form>
        </Container>
    );
};

export default Edit;