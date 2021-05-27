import React from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'
import { Search } from 'react-bootstrap-icons';
import '../styles/components/search-on-movie-page.scss'

function SearchOnMoviePage() {
    return (
        <InputGroup className="search-on-movie-page"
            style={{
                borderRadius: 30,
                background: 'white',
                width: 420,
                backgroundColor: '#1B1919',
            }}>
            <InputGroup.Append>
                <Button variant="primary"
                    style={{
                        borderTopLeftRadius: 30,
                        borderBottomLeftRadius: 30,
                        width: 26,
                        paddingLeft: 24,
                        fontSize: 18,
                        backgroundColor: '#1B1919',
                        border: 'none',
                    }}>
                    <Search style={{ color: '#5F5F5F ' }} />
                </Button>
            </InputGroup.Append>
            <FormControl
                style={{
                    background: 'rgba(0, 0, 0, 0)',
                    border: "none",
                    color: '#FEFEFE',
                }}
                placeholder="Type here smth..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
            />
        </InputGroup>
    )
}

export default SearchOnMoviePage
