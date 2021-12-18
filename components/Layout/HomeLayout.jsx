/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Container from './Container'

function HomeLayout({ children }) {
    return (
        <div className="relative">
            <img src="/img/blobs-01.svg" className="absolute inset-0 -z-10" alt="" />
            <Container center={true}>
                <Navbar />
            </Container>
            {children}
        </div>
    )
}

export default HomeLayout
