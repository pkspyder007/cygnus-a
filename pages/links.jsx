import H1 from '@/components/Common/H1'
import Container from '@/components/Layout/Container'
import Head from 'next/head'
import React from 'react'

function Links() {
    return (
        <>
            <Head>
                <title>Links | Praveen Kr.</title>
            </Head>
            <Container>
                <div className="prose prose-p:text-md md:prose-p:text-xl mx-auto md:mt-12 break-words mb-4 md:mb-24">
                    <span className="underline underline-offset-8 decoration-wavy"><H1 text="Socials & Links" classes="leading-[1.4]" /></span>
                    <ul>
                        <li>
                            <p>Email: <a className='ml-3' href="mailto:praveen@praveeen.in">praveen@praveeen.in</a></p>
                        </li>
                        <li>
                            <p>LinkedIn: <a className='ml-3' href="https://www.linkedin.com/in/pkspyder007" target="_blank" rel="noreferrer">pkspyder007</a></p>
                        </li>
                        <li>
                            <p>
                                Github: <a className='ml-3' href="https://github.com/pkspyder007" target="_blank" rel="noreferrer">https://github.com/pkspyder007</a>
                            </p>
                        </li>

                        <li>
                            <p>
                                Resume: <a className='ml-3' href="/praveen_kumar.pdf" target="_blank" rel="noreferrer">PDF</a>
                            </p>
                        </li>
                        <li>
                            <p>
                                Discord Community: <a className='ml-3' href="https://discord.gg/vnT9XmwHdj" target="_blank" rel="noreferrer">Codú Community</a>
                            </p>
                        </li>
                        <li>
                            <p>
                                Youtube: <a className='ml-3' href="https://www.youtube.com/channel/UCApeS8qFr_iegt-FrdIq8mw" target="_blank" rel="noreferrer">Channel</a>
                            </p>
                        </li>
                    </ul>

                </div>
            </Container>
        </>
    )
}

export default Links
