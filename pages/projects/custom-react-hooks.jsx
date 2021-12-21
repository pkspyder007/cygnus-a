/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import H1 from '@/components/Common/H1'
import Container from '@/components/Layout/Container'
import React from 'react'
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize'
import rehypePrism from 'rehype-prism-plus'
import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote';
import Meta from '@/components/Meta';
import { MDXComponents } from '@/components/MDX';

function CustomHooks({ source }) {
    return (
        <Container center={true}>
            <div className="prose dark:prose-invert mx-auto">
                <H1 text="Custom React Hooks" />
                <MDXRemote components={MDXComponents} {...source} />
                <a href="https://github.com/pkspyder007/custom-react-hooks" target="_blank" rel="noopener noreferrer">Github repo</a>
                <br />
                <a href="https://codesandbox.io/s/github/pkspyder007/custom-react-hooks" target="_blank" rel="noopener noreferrer">Code Sandbox link</a>
            </div>
        </Container >
    )
}

export default CustomHooks


export const getStaticProps = async ({ params }) => {
    const postFilePath = path.join(process.cwd(), 'content', 'custom-hooks.mdx');
    const source = fs.readFileSync(postFilePath)

    const { content, data } = matter(source)

    const mdxSource = await serialize(content, {
        mdxOptions: {
            rehypePlugins: [(...args) => rehypePrism(...args, {
                showLineNumbers: true
            })],
        },
        scope: data,
    })

    return {
        props: {
            source: mdxSource,
        },
    }
}
