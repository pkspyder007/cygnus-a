/* eslint-disable @next/next/no-img-element */
import React from 'react'
import H1 from '@/components/Common/H1'
import Container from '@/components/Layout/Container'
import Meta from '@/components/Meta'

function CLI() {
    return (
        <Container center={true}>
            <Meta title="Tech Blogs CLI" description="techblogs.dev cli version using node.js" />
            <div className="prose dark:prose-invert mx-auto">
                <H1 text="Awesome tech blogs cli" />
                <p>
                    This npm package is command-line version of <a href="https://tech-blogs.dev/" target="_blank" rel="noopener noreferrer">Techblogs.dev</a>. Which is a collection of technical blogs.

                </p>
                <p>Built using</p>
                <ul>
                    <li>Node.js</li>
                </ul>
                <h2>Features</h2>
                <ul>
                    <li>List all blogs through <code>atb all</code></li>
                    <li>List all blogs related to a tag <code>atb tag &quot;spring boot&quot;</code></li>
                    <li>List help commands <code>atb help</code> </li>
                </ul>
                <img src="/img/cli1.png" alt="cli help screen" />
                <img src="/img/cli2.png" alt="cli help screen" />
                <a href="https://github.com/pkspyder007/awesome-tech-blogs-cli" target="_blank" rel="noopener noreferrer">Github repo</a>
                <br />
                <a href="https://www.npmjs.com/package/awesome-tech-blogs" target="_blank" rel="noopener noreferrer">NPM package</a>
            </div>
        </Container>
    )
}

export default CLI
