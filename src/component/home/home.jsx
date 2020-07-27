import React, { Fragment, useState, useEffect } from 'react';
import { UncontrolledCarousel, Jumbotron, Button, Container, CardImg } from 'reactstrap';
import axios from 'axios'
import effect from './js/effect'
import './css/home.css'
import { render } from '@testing-library/react';


const api = 'http://localhost:3002'

const Home = () => {
    const [images, setImages] = useState([])

    useEffect(() => {
        axios.get(api + '/tampil').then(res => {
            if (res.data.status === 200) {
                setImages(res.data.values)
            }
        }).catch(err => {
            alert('Aplikasi Anda Error')
        })
    })

    // const showImages = (images) => {
    //     let res = []
    //     for (let image of images) {
    //         let img = image.gambar
    //         res.push(img)
    //     }
    //     return res
    // }

    const showPict = (picts) => {
        let res = []
        for (let pict of picts) {
            let card = <CardImg className="gambar" src={pict.gambar} alt="Card image cap" />
            res.push(card)
        }
        return res
    }

    const item = (items) => {
        let res = []
        
        for (let item of items){
            let Aitems =
                {   
                    src         : item.gambar,
                    altText     : item.judul,
                    header      : item.judul,
                    key         : item.id_gambar
                }
        res.push(Aitems)
        }return res
    }

    return (
        <Fragment>
            <div className="jumbotron" style={{ "backgroundColor": "rgb(24, 24, 24)" }}>
                <Jumbotron style={{ "backgroundColor": "rgb(24, 24, 24)" }}>
                    <div className="isi">
                        <h1 className="display-2" >Welcome To FHM Studio</h1>
                        <UncontrolledCarousel items={item(images)} className="slider" />
                        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr className="my-2" />
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        <br />
                        <h3 style={{ "textAlign": "center" }}>Gallery</h3>
                    </div>
                    {showPict(images)}

                    <br />
                    <a className="button" href="/gallery">See More</a>

                </Jumbotron>

            </div>
            {/* <script src={effect}></script> */}
        </Fragment>

    )
};


export default Home;




    // class home extends Component {
    //     constructor(props) {
    //         super(props)

    //         this.state = {
    //             judul: [],
    //             gambar: [],
    //             response: '',
    //             display: 'none',
    //         }
    //     }

    //     componentDidMount() {
    //         axios.get(api + '/tampil').then(res => {
    //             this.setState({
    //                 gambar: res.data.values
    //             })
    //         })
    //     }



    // render() {
    //     const items = [
    //         {
    //             src: this.state.gambar.map(gambar => gambar.gambar),
    //             altText: 'Slide 1',
    //             caption: 'Slide 1',
    //             header: 'Slide 1 Header',
    //             key: '1'
    //         },
    //         {
    //             src: 'https://images.unsplash.com/photo-1595480788080-b158faee4930?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    //             altText: 'Slide 2',
    //             caption: 'Slide 2',
    //             header: 'Slide  Header',
    //             key: '2'
    //         },

    //         {
    //             src: 'https://images.unsplash.com/photo-1595329003838-e84bddd3bc34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80',
    //             altText: 'Slide 3',
    //             caption: 'Slide 3',
    //             header: 'Slide  Header',
    //             key: '3'
    //         }
    //     ]
    // render () {
    //     const showImages = (images) => {
    //         let res = []
    //         for (let image of images) {
    //             let card = <CardImg className="gambar" src={image.gambar} alt="Card image cap" />
    //             res.push(card)
    //         }
    //         return res
    //     }

    //     return (
    //         <Fragment>
    //             <div className="jumbotron" style={{ "backgroundColor": "rgb(24, 24, 24)" }}>
    //                 <Jumbotron style={{ "backgroundColor": "rgb(24, 24, 24)" }}>
    //                     <div className="isi">
    //                         <h1 className="display-2" >Welcome To FHM Studio</h1>
    //                         <UncontrolledCarousel items={items} className="slider" />
    //                         <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
    //                         <hr className="my-2" />
    //                         <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    //                         <br />
    //                         <h3 style={{ "textAlign": "center" }}>Gallery</h3>
    //                     </div>
    //                     {showImages(images)}
    //                     <br />
    //                     <a className="button" href="/gallery">See More</a>

    //                 </Jumbotron>

    //             </div>
    //             {/* <script src={effect}></script> */}
    //         </Fragment>

    //     )
    // }
    // }
