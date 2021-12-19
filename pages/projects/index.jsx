import H1 from '@/components/Common/H1'
import Container from '@/components/Layout/Container'
import Meta from '@/components/Meta'
import Link from 'next/link'
import React from 'react'

const PROJECTS = [
    { link: 'iiitu-adm', title: 'IIIT Una admission portal' },
    { link: 'custom-react-hooks', title: 'Custom React Hooks' },
    { link: 'liqrcart', title: 'LiqrCart: online liquor delivery' },
    { link: 'lotus', title: 'Lotus' },
    { link: 'youtube-chat-mod', title: 'Youtube live chat moderator' },
    { link: 'awesome-blog-cli', title: 'Awesome Tech Blogs CLI' },
    { link: 'force-website', title: 'Force Website' },
]

function index() {
    return (
        <Container center={true}>
            <Meta title="Projects" description="All my project list" />
            <div className="prose mx-auto">
                <span className="underline decoration-wavy underline-offset-8">
                    <H1 text="Projects" />
                </span>
                <ul>

                    {PROJECTS.map(({ title, link }) => (<li key={title}>
                        <h2>
                            <Link href={`/projects/${link}`}>
                                <a className="text-light-green no-underline hover:underline">{title}</a>
                            </Link>
                        </h2>
                    </li>))}
                </ul>

            </div>
        </Container>
    )
}

export default index
