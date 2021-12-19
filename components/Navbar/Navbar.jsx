import React from 'react'
import Desktop from './Desktop'
import Mobile from './Mobile'

function Navbar({ isScrolled }) {
    return (
        <>
            <Desktop isScrolled={isScrolled} />
            <Mobile isScrolled={isScrolled} />
        </>
    )
}

export default Navbar
