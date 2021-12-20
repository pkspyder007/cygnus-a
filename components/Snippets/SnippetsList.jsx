import Link from 'next/link'
import React from 'react'
import Lottie from 'react-lottie'
import H1 from '../Common/H1'
import animationData from '@assets/surprised-face.json'
import Container from '../Layout/Container'

function SnippetsList({ snippets }) {
    return (
        <Container center={true}>
            <main className='prose mx-auto'>
                <H1 text="Snippets" />
                {snippets.map(snippet => (<div key={snippet.slug} className="my-12">
                    <Link href={`/snippets/${snippet.slug}`} passHref>
                        <h2 className="text-dark-gray text-2xl font-semibold cursor-pointer">{snippet?.title}</h2>
                    </Link>
                    <p className="my-6 leading-8 font-light">
                        {snippet?.description}
                    </p>
                    <Link href={`/snippets/${snippet.slug}`} passHref>
                        <a>
                            Get Code
                        </a>
                    </Link>
                </div>
                ))}
            </main>
        </Container>
    )
}

export default SnippetsList
