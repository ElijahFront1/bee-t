import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../styles/components/find-movie-card.scss'

function FindMovieCard({ movie }) {
    return (
        <Col className="find-movie-card">
            <Row>
                <NavLink to={{ pathname: "/moviepage" }}
                    style={{
                        display: 'flex',
                        width: '100%',
                        textDecoration: 'none',
                    }}>
                    <Card
                        style={{
                            width: '100%',
                            borderRadius: 10,
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 15,
                            color: '#FEFEFE',
                            textAlign: 'left',
                        }}>
                        <Card.Img src={movie.Poster} style={{
                            fontSize: 24,
                            width: 95,
                            height: 141,
                        }} />
                        <Card.Body>
                            <Card.Title style={{
                                fontSize: 24,
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                            }}>
                                <span>{movie.Title}</span>
                                <span style={{
                                    float: 'right',
                                    height: 30,
                                    width: 87,
                                    color: 'black',
                                    fontWeight: 900,
                                    fontSize: 12,
                                    backgroundColor: '#FAC539',
                                    textAlign: 'center',
                                    lineHeight: '2.7em',
                                    borderRadius: 8,
                                }}>
                                    IMDb {movie.imdbRating}
                                </span>
                            </Card.Title>
                            <Card.Title className="find-movie-card__span-wrapper"
                                style={{
                                    fontSize: 14,
                                    color: '#FBFBFB',
                                }}>
                                <span>{movie.Type}</span>
                                <span>{movie.Genre}</span>
                                <span style={{ border: 'none' }}>{movie.Year}</span>
                            </Card.Title>
                            <Card.Text style={{
                                fontSize: 12,
                                paddingTop: 15,
                                borderTop: '1px solid rgba(255, 255, 255, 0.05)'
                            }}>
                                <span>{movie.Metascore}</span>
                                <span style={{ border: 'none' }}>{movie.Awards}</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </NavLink>
            </Row>
        </Col >
    )
}

export default FindMovieCard
