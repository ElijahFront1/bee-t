import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SearchOnMoviePage from '../components/SearchOnMoviePage'
import Similar from '../components/Similar'
import '../styles/pages/movie-page.scss'
import Img from '../images/image.png';
import Img2 from '../images/image2.png';
import BigBtn from '../components/BigBtn';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchMovieById } from '../store/actions';
import axios from 'axios';

function MoviePage() {
    // const dispatch = useDispatch()

    const [movie, setMovie] = useState([]);
    const [similarList, setSimilarList] = useState([]);

    console.log(movie);
    useEffect(() => {
        // dispatch(fetchSearchMovieById(sessionStorage.getItem('imdbID')))
        // export const fetchSearchMovieById = (imdbID) => async (dispatch) => {
        //     try {
        //         const response = await axios.get(`http://www.omdbapi.com/?i=${imdbID}&apikey=4fff3540&plot=full`);
        //         if (response.data.Title) {
        //             dispatch(searchMovie(response.data))
        //         } else {
        //             dispatch(searchMovie(null))
        //         }
        //     } catch (e) {
        //         alert(e)
        //     }
        // };

        axios.get(`http://www.omdbapi.com/?i=${sessionStorage.getItem('imdbID')}&apikey=4fff3540&plot=full`).then(function (response) {
            console.log(response.data);
            setMovie(response.data, response.data.Poster = response.data.Poster.replace('SX300', ''))
        }).catch((error) => {
            console.error(error);
        });

        const similarOptions = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/title/get-more-like-this',
            params: { tconst: sessionStorage.getItem('imdbID'), currentCountry: 'US', purchaseCountry: 'US' },
            headers: {
                'x-rapidapi-key': 'c1807b2229msh6a1bbb653daf520p13edb9jsna2a3c5adfb6c',
                'x-rapidapi-host': 'imdb8.p.rapidapi.com'
            }
        };

        axios.request(similarOptions).then((response) => {
            setSimilarList(response.data.slice(0, 4))
        }).catch((error) => {
            console.error(error);
        });
    }, [])
    console.log(similarList);
    // const movie = useSelector(({ reducers }) => reducers.movie)

    return (
        <Row className="movie-page" style={{
            color: 'white',
            flexDirection: 'column'
        }}>
            <Col sm={{ span: 12 }} lg={{ span: 10, offset: 1 }}>
                <Row style={{
                    justifyContent: 'space-between',
                    height: '5rem',
                    alignItems: 'center'
                }}>
                    <Col md="auto" style={{
                        fontWeight: 300,
                        fontSize: 24,
                        color: '#FEFEFE',
                    }}>
                        Richbee Shows
                    </Col>
                    <Col className="search" md="auto" style={{
                        height: 50,
                    }}>
                        <SearchOnMoviePage />
                    </Col>
                </Row>
            </Col>
            <Col>
                <Row style={{
                    height: 810,
                }}>
                    <Col sm={{ span: 12 }} lg={{ span: 10, offset: 1 }}>
                        <Row style={{
                            flexDirection: 'column',
                        }}>
                            <Col sm={{ span: 12 }} lg={{ span: 12 }}
                                style={{
                                    paddingTop: '6rem',
                                }}>
                                <h1 style={{
                                    fontWeight: 900,
                                    fontSize: '3.6rem'
                                }}>
                                    {movie.Title}
                                </h1>
                            </Col>
                            <Col sm={{ span: 12 }} lg={{ span: 12 }} className="movie-page__span-wrapper"
                                style={{
                                    paddingTop: '1rem'
                                }}>
                                <span style={{
                                    minHeight: '1.6rem',
                                    display: 'inline-block',
                                    minWidth: '4.4rem',
                                    color: 'black',
                                    fontWeight: 900,
                                    fontSize: 12,
                                    backgroundColor: '#FAC539',
                                    textAlign: 'center',
                                    borderRadius: 8,
                                    lineHeight: '1.7rem',
                                    borderRight: 'none',
                                }}>
                                    IMDb {movie.imdbRating}
                                </span>
                                <span>{movie.Type}</span>
                                <span>{movie.Genre}</span>
                                <span style={{ border: 'none' }}>{movie.Year}</span>
                            </Col>
                            <Col sm={{ span: 12 }} lg={{ span: 5 }}
                                style={{
                                    marginTop: '9.8rem'
                                }}>
                                <BigBtn text={'Watch'} />
                            </Col>
                            <Col sm={{ span: 12 }} lg={{ span: 5 }}
                                style={{
                                    fontWeight: 600,
                                    marginTop: '2.5rem',
                                }}>
                                <span>
                                    {movie.Awards}
                                </span>
                            </Col>
                        </Row>
                    </Col>
                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        left: '50%',
                        top: '50%',
                        objectFit: 'cover',
                        transform: 'translate(-50%, -50%)',
                        zIndex: '-1',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    }}></div>
                    <img src={movie.Poster}
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            left: '50%',
                            top: '50%',
                            objectFit: 'cover',
                            transform: 'translate(-50%, -50%)',
                            zIndex: '-2',
                            backgroundColor: 'rgba(0, 0, 0, .3)',
                        }}></img>
                </Row>
                <Row style={{ backgroundColor: '#E5E5E5' }}>
                    <Col sm={{ span: 12 }} lg={{ span: 10, offset: 1 }}>
                        <Row style={{ flexDirection: 'column', color: '#323232' }}>
                            <Col sm={{ span: 12 }} lg={{ span: 8 }}
                                style={{
                                    fontWeight: 900,
                                    fontSize: 36,
                                    paddingTop: '3rem',
                                    lineHeight: '2.3rem',
                                }}>
                                <span>{`Watch ${movie.Title} on Richbee Shows`}</span>
                            </Col>
                            <Col sm={{ span: 12 }} lg={{ span: 8 }}
                                style={{
                                    fontWeight: 400,
                                    fontSize: 18,
                                    paddingTop: '1.5rem',
                                }}>
                                <span>
                                    {movie.Plot}
                                </span>
                            </Col>
                            <Col style={{
                                fontWeight: 900,
                                fontSize: 24,
                                paddingTop: '2rem',
                            }}>
                                <span>You may also like</span>
                            </Col>
                            <Col style={{
                                display: 'flex',
                                marginTop: '1.2rem',
                                marginBottom: '2.5rem',
                                justifyContent: 'space-between'

                            }}>
                                {similarList && similarList.map(item => {
                                    return <Similar key={item}
                                        imdbID={item} />
                                })}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col style={{
                backgroundColor: '#111111',
                height: '4rem',
                lineHeight: '4rem',
                textAlign: 'center'
            }}>
                <span>Richbee Shows</span>
            </Col>
        </Row >
    )
}

export default MoviePage
