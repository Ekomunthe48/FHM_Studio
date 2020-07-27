import React, { Component, Fragment } from 'react';
import { Container, CardImg } from 'reactstrap';
import './css/about.css'
import gambar from './src/botot.jpg'



class About extends Component {
    render() {
        return (
            <Fragment>
                <div className="tubuh">
                <Container>
                    <div className="konten">
                        <CardImg className="img" src={gambar} />
                        <div className="isi-konten">
                            <h3>Photographer</h3>
                            <h2>FHW Munthe</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Excepturi corrupti quaerat inventore consequuntur quia exercitationem,
                                recusandae sed voluptates dolores est doloremque unde nisi,
                                ut magnam, ipsam quod temporibus repellendus impedit!
                    </p>
                        </div>
                    </div>
                </Container>
                </div>
            </Fragment>
        );
    }
}

export default About;