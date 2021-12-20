import SnippetsList from '@/components/Snippets/SnippetsList'
import { getAllSnippetMeta } from '@/utils/blog'
import React from 'react'

function index({ snippets = [] }) {
    return (
        <div>
            <SnippetsList snippets={snippets} />
        </div>
    )
}

export default index


export const getStaticProps = async () => {
    return {
        props: {
            snippets: getAllSnippetMeta(),
        },
    }
}
