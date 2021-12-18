import React from 'react'

function H1({ text, classes, ...rest }) {
    return (
        <h1 className={`text-6xl text-light-green ${classes}`}>{text}</h1>
    )
}

export default H1
