import React, { Component, Fragment } from 'react';
import { Container, CardImg } from 'reactstrap';
import './css/about.css'
import gambar from './src/botot.jpg'
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        textAlign: 'center'
    },
}));
const About = () => {

        const classes = useStyles();
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
                                <div className={classes.root}>
                                    <IconButton aria-label="delete" color="primary" href='https://www.instagram.com/botoott/'>
                                        <InstagramIcon />
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </Fragment>
        );
    }


export default About;

