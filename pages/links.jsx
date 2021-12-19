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
                <div className="prose prose-p:text-md md:prose-p:text-xl mx-auto md:mt-12 break-words">
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
                                Resume: <a className='ml-3' href="/resume" target="_blank" rel="noreferrer">https://praveeen.in/resume</a>
                            </p>
                        </li>
                        <li>
                            <p>
                                Resume (PDF): <a className='ml-3' href="/resume?pdf=true" target="_blank" rel="noreferrer">G-Drive</a>
                            </p>
                        </li>
                        <li>
                            <p>
                                Discord Community: <a className='ml-3' href="https://discord.gg/vnT9XmwHdj" target="_blank" rel="noreferrer">Codú Community</a>
                            </p>
                        </li>
                    </ul>

                </div>
            </Container>
        </>
    )
}

export default Links