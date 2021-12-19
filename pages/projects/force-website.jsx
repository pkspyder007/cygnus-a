/* eslint-disable @next/next/no-img-element */
import React from 'react'
import H1 from '@/components/Common/H1'
import Container from '@/components/Layout/Container'

function Force() {
    return (
        <Container center={true}>
            <div className="prose mx-auto">
                <H1 text="Force Website" />
                <p>
                    Created a statically generated website for collge&apos;s technical club <a href="http://forceiiitu.in" target="_blank" rel="noopener noreferrer">Force</a> using
                </p>
                <ul>
                    <li>Next.js</li>
                    <li>Tailwind CSS</li>
                    <li>JSON for data</li>
                </ul>
                <a href="https://github.com/pkspyder007/force-website" target="_blank" rel="noopener noreferrer">Github repo</a>
                <br />
                <a href="https://forceiiitu.in" target="_blank" rel="noopener noreferrer">Live website</a>
                <img src="/img/fw1.png" alt="force website" />
            </div>
        </Container>
    )
}

export default Force
