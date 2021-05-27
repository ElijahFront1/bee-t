import React, { useEffect, useState } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import axios from 'axios'
import FindMovieCard from '../components/FindMovieCard';
import Search from '../components/Search';
import Video from '../video/background.mp4';
import '../styles/pages/search-page.scss'
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchSearchMovie, fetchSearchMovieById } from '../store/actions';

function SearchPage() {
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(fetchSearchMovieById(sessionStorage.getItem('imdbID')))
    // }, [])
    const [searchValue, setSearchValue] = useState('');
    const [movie, setMovie] = useState();
    const [isLoad, setLoad] = useState(false);

    const fetchSearchMoviesHandler = async (searchValue) => {
        // dispatch(fetchSearchMovie(searchValue))
        try {
            // dispatch(setLoad(true))
            // dispatch(setLoad(true))
            setLoad(true)
            const response = await axios.get(`http://www.omdbapi.com/?t=${searchValue}&apikey=4fff3540&plot=full`);
            if (response.data.Title) {
                // dispatch(searchMovie(response.data))
                setMovie(response.data)
                console.log(response.data);
                sessionStorage.setItem('imdbID', response.data.imdbID);
            } else {
                // dispatch(searchMovie(null))
                sessionStorage.setItem('imdbID', null);
            }
        } catch (e) {
            alert(e)
        } finally {
            // dispatch(setLoad(false))
            setLoad(false)
        }
    }

    // const isLoad = useSelector(({ reducers }) => reducers.loading)
    // const movie = useSelector(({ reducers }) => reducers.movie)

    console.log(sessionStorage.getItem('imdbID'));

    return (
        <Row className="search-page" align="middle"
            style={{
                fontFamily: 'Montserrat',
            }}>
            <Col sm={{ span: 12 }} lg={{ span: 8, offset: 2 }}>
                <Row style={{
                    height: '100vh',
                }}>
                    <Col className="search-page__title"
                        md={{ span: 12 }}
                        style={{
                            color: '#FBFBFB',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                        }}>
                        <h1 style={{
                            fontWeight: 900,
                        }}>
                            Unlimited movies, TV shows, and more.
                        </h1>
                        <h3 style={{
                            fontWeight: 500,
                            paddingTop: '1.2rem',
                            paddingBottom: '3.1rem',
                        }}>
                            Watch anywhere. Cancel anytime.
                        </h3>
                    </Col>
                    <Col sm={{ span: 10, offset: 1 }} xl={{ span: 8, offset: 2 }}
                        style={{
                            color: '#FBFBFB',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                        }}>
                        <Row style={{ justifyContent: 'center' }}>
                            {isLoad && <Spinner
                                as="span"
                                animation="border"
                                size="xs"
                                role="status"
                                aria-hidden="true"
                                style={{
                                    position: 'absolute',
                                    right: '-34px',
                                    top: '3px'
                                }}
                            />}
                            <Search searchValue={searchValue} setSearchValue={setSearchValue} fetchSearchMoviesHandler={fetchSearchMoviesHandler} />
                            {!!movie && <FindMovieCard movie={movie} />}
                            {!movie && <span
                                style={{
                                    position: 'absolute',
                                    top: '4rem',
                                }}>
                                Sorry, could not find anything : (
                            </span>}
                        </Row>
                    </Col>
                </Row>
            </Col>
            <video
                // autoPlay
                loop
                muted
                style={{
                    position: 'absolute',
                    width: '100%',
                    left: '50%',
                    top: '50%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'translate(-50%, -50%)',
                    zIndex: '-1',
                }}>
                <source src={Video} type="video/mp4" />
            </video>
        </Row >
    )
}

export default SearchPage
