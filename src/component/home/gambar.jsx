import React from 'react';

// import { Container } from './styles';

const aktifGambarW = ({ aktifGambar }) => {
    console.log(aktifGambar)
    return (
    <div style={styles}>
        <img src={aktifGambar.Image} />
    </div>
    )
}

const styles ={
    height : '65%',
    width: '100%',
    background: '#333'
}

export default aktifGambarW;