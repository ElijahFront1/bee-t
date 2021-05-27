import React from 'react'
import { Button } from 'react-bootstrap'
import '../styles/components/big-btn.scss'

function BigBtn({ text }) {
    return (
        <Button className="big-btn"
            style={{
                border: '2px solid #FBFBFB',
                boxSizing: 'border-box',
                borderRadius: 40,
                width: '10rem',
                height: '3rem',
                backgroundColor: 'rgba(0, 0, 0, 0)',
            }}>
            <span>{text}</span>
        </Button>
    )
}

export default BigBtn
