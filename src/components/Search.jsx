import React from 'react'
import { Button, Col, FormControl, InputGroup } from 'react-bootstrap'

function Search(props) {
    return (
        <Col md={{ span: 12 }}>
            <InputGroup className="mb-3"
                style={{
                    borderRadius: 30,
                    background: 'white',
                }}>
                <FormControl
                    style={{
                        background: 'rgba(0, 0, 0, 0)',
                        border: "none",
                        color: '#312E2E',
                    }}
                    placeholder="Type here smth..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={(e) => props.setSearchValue(e.target.value)}
                />
                <InputGroup.Append>
                    <Button variant="primary"
                        onClick={() => props.fetchSearchMoviesHandler(props.searchValue)}
                        style={{
                            borderTopRightRadius: 30,
                            borderBottomRightRadius: 30,
                            width: 121,
                            fontSize: 18
                        }}>
                        Button
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        </Col >
    )
}

export default Search
