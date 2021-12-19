/* eslint-disable @next/next/no-img-element */
import React from 'react'
import H1 from '@/components/Common/H1'
import Container from '@/components/Layout/Container'

function Lotus() {
    return (
        <Container center={true}>
            <div className="prose mx-auto">
                <H1 text="Lotus" />
                <p>
                    Generating and automating invoices is not an easy task and <mark>LOTUS</mark> help in mitigating that.
                    <br />
                    It provides an API and UI interface to create <mark>templates</mark> for invoice pdfs using <mark>Tailwind CSS</mark> adding <mark>handlebars</mark> based dynamic values during build time.
                </p>
                <p>Built using</p>
                <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Handlebars</li>
                    <li>Tailwind CSS</li>
                    <li>Puppeteer</li>
                    <li>Passport.js</li>
                </ul>

                <img src="/img/lotus1.png" alt="cli help screen" />
                <figcaption className="text-center">Homepage</figcaption>
                <img src="/img/lotus2.png" alt="cli help screen" />
                <figcaption className="text-center">Login screen</figcaption>
                <img src="/img/lotus3.png" alt="cli help screen" />
                <figcaption className="text-center">All templates screen</figcaption>
                <img src="/img/lotus4.png" alt="cli help screen" />
                <figcaption className="text-center">PDF output</figcaption>
                <a href="https://github.com/pkspyder007/lotus" target="_blank" rel="noopener noreferrer">Github repo</a>
                <br />
                <a href="https://lotus-one.herokuapp.com/" target="_blank" rel="noopener noreferrer">Website Link</a>
            </div>
        </Container>
    )
}

export default Lotus
