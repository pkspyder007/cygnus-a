import React from 'react'

function Pill({ text, classes }) {
    return (
        <p className={`bg-light-green px-3 py-1 m-2 text-sm ease-in duration-100 hover:scale-110 hover:bg-green hover:text-light-gray  block rounded ${classes}`}>
            {text}
        </p>
    )
}

export default Pill
