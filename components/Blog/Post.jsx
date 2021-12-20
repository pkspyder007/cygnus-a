import { formatDateForPostHeader } from '@/utils/index'
import { MDXRemote } from 'next-mdx-remote'
import React from 'react'
import { MDXComponents } from '../MDX'
import Meta from '../Meta'

function Post({ source, frontMatter, isSnippet }) {
    return (
        <>
            <Meta title={frontMatter?.title} description={frontMatter?.description} url={`https://praveeen.in/${isSnippet ? 'snippets' : 'posts'}/${frontMatter?.slug}`} />
            <div className="relative prose prose-headings:text-green break-words mx-auto">
                {formatDateForPostHeader(frontMatter.date)}
                <h1>{frontMatter.title}</h1>
                <MDXRemote components={MDXComponents} {...source} />
            </div>
        </>
    )
}

export default Post
