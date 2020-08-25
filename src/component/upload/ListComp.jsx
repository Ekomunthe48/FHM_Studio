import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table, Button, Container, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'
import AuthService from '../Login/auth-services'

const api = 'http://localhost:3010'

const ListComp = (props) => {
    const [images, setImages] = useState([])
    // const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        // const user = AuthService.getCurrentUser()
        // if (user) {
        //     setCurrentUser(user)
        // }

        axios.get(api + '/tampil').then(res => {
            console.log('values ', JSON.stringify(res.data))
            setImages(res.data)
        }).catch(err => {
            alert('Aplikasi Anda Error')
        })
    }, [])

    
       

    const logOut = () => {
        AuthService.logout();
      };
    
    const deleteImage = (id) => {
        const data = {
            id
        }

        axios.delete(api + '/hapus', {
            data : data
        }).then(json => {
            if (json.data.status === 200) {
                setImages({
                    response: json.data,
                    data: data.filter(data => data.id !== id),
                    display: 'block'
                })
            } else {
               setImages({
                    response: json.data,
                    display: 'block'
                })
            }
            
            props.history.push('/admin/home')
            window.location.reload();
        })
    }

    return (
        <Container>
            <h2>Data Gambar</h2>
            <NavLink href="/admin/add"><Button color="success">Add Picture</Button></NavLink>
            <hr />
            <a href="/admin" className="nav-link" onClick={logOut}>
                  LogOut
            </a>

            <Table className="table-bordered">
                <thead>
                    <tr>
                        <th>Judul</th>
                        <th>Tanggal</th>
                        <th>Gambar</th>
                        <th>Aksi</th>
                    </tr>
                </thead>

                <tbody>
                    {images.map(image =>
                        <tr key={image.id}>
                            <td>{image.title}</td>
                            <td>{image.date}</td>
                            <td>{image.picture}</td>
                            <td>
                                <Link to={{
                                    pathname: '/admin/edit',
                                    search: `?id=${image.id}`,
                                    query: {
                                        id : image.id,
                                        title: image.title,
                                        date: image.date,
                                    }
                                }}>
                                    <Button>Edit</Button>
                                </Link>
                                <span></span>
                                <Button onClick={() => deleteImage(image.id)} color="danger">Hapus</Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    )
};


export default ListComp;