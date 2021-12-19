import H1 from '@/components/Common/H1'
import Container from '@/components/Layout/Container'
import Meta from '@/components/Meta'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

function about() {
    return (
        <>
            <Meta title="About" description="Get to know me a little more" url="https://praveeen.in/about" />
            <Container>
                <div className="prose prose-p:text-xl mx-auto md:mt-12">
                    <span className="underline  underline-offset-8 decoration-wavy"><H1 text="About ME!" /></span>
                    <p>
                        Hi 👋🏽, I&apos;m Praveen, I love to  eat 🍔, code 💻, and explore 🌍.
                    </p>
                    <p>
                        I am a software engineer, currently working at <a href="https://quizizz.com" target="_blank" rel="noreferrer" >Quizizz</a> as a full stack developer intern. And pursuing my bachleors from <a href="https://www.iiitu.ac.in" target="_blank" rel="noreferrer" >Indian Institute of Information Technology Una</a> in Computer Science and engineering.
                        I am also a <mark>
                            <strong>Google Students Developers Club Lead.</strong>
                        </mark>
                    </p>
                    <p>
                        I have previously worked at :
                    </p>
                    <ul>
                        <li><a href="https://baystreet.io" target="_blank" rel="noreferrer">BayStreet Innovation</a></li>
                        <li><a href="https://www.hindustantimes.com" target="_blank" rel="noreferrer">Hindustan TImes</a></li>
                        <li><a href="https://xoolooloo.com" target="_blank" rel="noreferrer">Xoolooloo</a></li>
                        <li><a href="https://rinnegan.co" target="_blank" rel="noreferrer">Rinnegan Technologies</a></li>
                    </ul>
                    <p>
                        Looking for my resume? Get it from <Link href={"/resume"}><a>here</a></Link>
                    </p>
                    <p>
                        My free time generally goes into learning new technology in web development and <strong>JavaScript</strong> ecosystem.
                        <mark>These days I am working on a <strong>$0 blog project</strong> in which I am building a <strong>blog</strong> using <strong>Next.js</strong> and <strong>MdX</strong>.</mark>
                        That aims to provide developers a platform to write and publish their own blog with interactivity of React.js components in their markdown content at 0 price.
                    </p>
                    <p>
                        If that sounds intresting to you, you can ping me on my email <mark><i>praveen@praveeen.in</i></mark> or you can connect with me on socials <Link href="/links">here</Link>.
                    </p>
                </div>
            </Container>
        </>
    )
}

export default about
