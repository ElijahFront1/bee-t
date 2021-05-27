import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'

function Similar({ imdbID }) {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?i=tt${imdbID.replace(/[^0-9]/g, '')}&apikey=4fff3540&plot=full`).then(function (response) {
            console.log(response.data);
            setMovie(response.data)
        }).catch((error) => {
            console.error(error);
        });
    }, [])
    return (
        <div style={{
            paddingRight: '1rem',
            borderRadius: 15,
            maxWidth: 250
        }}>
            <img src={movie.Poster} style={{ width: '100%', height: '100%', borderRadius: 15 }} />
        </div>
        // <Row style={{}}>
        //     <Col sm={{ span: 10 }} style={{
        //         padding: 0,
        //         borderRadius: 15,
        //     }}>
        //         <img src={movie.Poster} style={{ width: '100%', height: '100%', maxHeight: 361, borderRadius: 15 }} />
        //     </Col>
        // </Row>
    )
}

export default Similar
