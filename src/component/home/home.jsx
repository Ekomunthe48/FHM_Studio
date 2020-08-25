import React, { Fragment, useState, useEffect } from 'react';
import { UncontrolledCarousel, Jumbotron, CardImg } from 'reactstrap';
import axios from 'axios'
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import effect from './js/effect'
import './css/home.css'

const api = 'http://localhost:3010'

const Home = () => {
    const [images, setImages] = useState([])

    useEffect(() => {
        axios.get(api + '/tampil').then(res => {
            console.log('values ', JSON.stringify(res.data))
            setImages(res.data)
        }).catch(err => {
            alert('Aplikasi Anda Error')
        })
    }, [])

    const showPict = (picts) => {
        let res = []
        for (let i = 0; i < 3; i++) {
            let pict = picts[i]

            console.log('images', pict)
            if (pict) {
                let card = <CardImg key={pict.id} className="gambar" src={pict.picture} alt="Card image cap" />
                res.push(card)
            }
        }
        return res
    }

    const item = (items) => {
        let res = []

        for (let i = 0; i < 3; i++) {
            let item = items[i]
            if (item) {
                let aItems =
                {
                    src: item.picture,
                    altText: item.title,
                    header: item.title,
                    key: item.id
                }
                res.push(aItems)
            }
        }
        return res
    }


    return (
        <Fragment>
            <div className="jumbotron" style={{ "backgroundColor": "rgb(255, 255, 255)" }}>
                <Jumbotron style={{ "backgroundColor": "rgb(255, 255, 255)" }}>
                    <div className="isi">
                        <h1 className="display-2" >Welcome To FHM Studio</h1>
                        <UncontrolledCarousel items={item(images)} style={{ "color": "rgb(35, 85, 248);" }} />
                        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr className="my-2" />
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        <br />
                        <h3 style={{ "textAlign": "center" }}>Gallery</h3>
                    </div>
                    {showPict(images)}

                    <br />
                    <Button variant="contained" color="primary"className="button" href="/gallery" disableElevation>
                    See More
                    </Button>

                </Jumbotron>

            </div>
        </Fragment>

    )


};

export default Home;