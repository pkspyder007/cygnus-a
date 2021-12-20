import { getAllSnippetPaths } from '@/utils/blog'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize'
import Container from '@/components/Layout/Container';
import Post from '@/components/Blog/Post';
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import Meta from '@/components/Meta';

function PostPage({ frontMatter, source }) {
    return (
        <>
            <Meta title={frontMatter.title} url={`https://praveeen.in/posts/${frontMatter.slug}`} description="Useful snippets that can come handy in development" />
            <Container center={true}>
                <Post source={source} frontMatter={frontMatter} isSnippet={true} />
            </Container>
        </>
    )
}

export default PostPage


export const getStaticProps = async ({ params }) => {
    const snippetFilePath = path.join(process.cwd(), 'content', 'snippets', `${params.slug}.mdx`)
    const source = fs.readFileSync(snippetFilePath)

    const { content, data } = matter(source)

    const mdxSource = await serialize(content, {
        mdxOptions: {
            rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, (...args) => rehypePrism(...args, {
                showLineNumbers: true,
                highlightStyle: 'prism-okaidia'
            })],
            remarkPlugins: [],
        },
        scope: data,
    })

    return {
        props: {
            source: mdxSource,
            frontMatter: data,
        },
    }
}

export const getStaticPaths = async () => {
    const paths = getAllSnippetPaths();
    return {
        paths,
        fallback: false,
    }
}