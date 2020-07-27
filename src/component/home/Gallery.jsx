import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios'
import { Container,  CardImg, Row, Col } from 'reactstrap'
import './css/gallery.css'

const api = 'http://localhost:3002'

const Gallery = () => {
    const [images, setImages] = useState([])

    useEffect(() => {
        axios.get(api + '/tampil').then(res => {
            //console.log('res: '+JSON.stringify(res))
            setImages(res.data.values)
        })
    })

    return (
        <Fragment >
            <div style={{ "backgroundColor": "rgb(24, 24, 24)",  }}>
            <h1 style={{"textAlign":"center",
            "backgroundColor": "rgb(24, 24, 24)",
            "marginTop" : "15px"
            }}>Gallery</h1>
            <Container className="kotak" style={{ "backgroundColor": "rgb(24, 24, 24)" }}>
                
                <Row style={{ "marginTop": "15px" }}>
                    <Col className="gambar">
                    {/* <div className="gambar"> */}
                        { showImages(images) }
                    {/* </div> */}
                    </Col>
                </Row>

            </Container>
            </div>
            </Fragment>
    )
}
    
const showImages = (images) => {
    let res = []
    for (let image of images) {
        let card = <CardImg className="gambar" src={image.gambar} alt="Card image cap" />
        res.push(card)
    }
    return res
}

/*
class Gallery extends Component {
    constructor(props) {
        super(props)

        this.state = {
            gambar: []
        }
    }

    componentDidMount() {
        axios.get(api + '/tampil').then(res => {
            console.log('res: '+JSON.stringify(res))
            this.setState({
                gambar: res.data.values
            }

            )
        })
    }




    render() {
        const showImage = (images) => {
            let res = ''
            for (let image of images) {
                res += <CardImg className="gambar" src={image.gambar} alt="Card image cap" />
            }
            return res
        }

        return (
            <Fragment >
            <div style={{ "backgroundColor": "rgb(24, 24, 24)",  }}>
            <h1 style={{"textAlign":"center",
            "backgroundColor": "rgb(24, 24, 24)",
            "marginTop" : "15px"
            }}>Gallery</h1>
            <Container className="kotak" style={{ "backgroundColor": "rgb(24, 24, 24)" }}>
                
                <Row style={{ "marginTop": "15px" }}>
                    <Col>
                        showImage(gambar)
                    </Col>
                </Row>

            </Container>
            </div>
            </Fragment>
            
            );
    }
}



*/




export default Gallery;