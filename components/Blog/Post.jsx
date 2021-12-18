import { formatDateForPostHeader } from '@/utils/index'
import { MDXRemote } from 'next-mdx-remote'
import React from 'react'
import { MDXComponents } from '../MDX'

function Post({ source, frontMatter }) {
    return (
        <div className="relative prose prose-headings:text-green break-words mx-auto">
            {formatDateForPostHeader(frontMatter.date)}
            <h1>{frontMatter.title}</h1>
            <MDXRemote components={MDXComponents} {...source} />
        </div>
    )
}

export default Post